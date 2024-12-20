import React, { useState, useEffect } from "react";
import "./EmployerData.css";

export default function EmployerData({
  onUserDetailsAdded,
  onUserDetailsUpdated,
  onCancel,  
  addCompanyDetails,
}) {
  const [formData, setFormData] = useState({
    userId: null,
    userName: "",
    userEmail: "",
    userPhone: "",      
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (addCompanyDetails) {
      setFormData({
        userId: addCompanyDetails.UserId,
        userName: addCompanyDetails.userName || "",
        userEmail: addCompanyDetails.userEmail || "",
        userPhone: addCompanyDetails.userPhone || "",          
      });
    } else {
      setFormData({
        userId: null,
        userName: "",
        userEmail: "",
        userPhone: "",          
      });
    }
  }, [addCompanyDetails]);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      formData.userName.trim() === "" ||
      formData.userEmail.trim() === "" ||
      formData.userPhone.trim() === ""       
    ) {
      setError("Please fill out all fields");
      return;
    }

    setError("");

    const body = {
      userId: formData.userId ?? 0,
      userName: formData.userName,
      userEmail: formData.userEmail,
      userPhone: formData.userPhone,      
    };

    console.log("Request Body:", body);

    const url = addCompanyDetails
      ? `https://localhost:7127/api/ApplicationUsers/${formData.userId}`
      : "https://localhost:7127/api/ApplicationUsers";
    const method = addCompanyDetails ? "PUT" : "POST";

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("Response Status:", response.status);
        return response.text().then((text) => {
          if (!response.ok) {
            console.error("Response Error Text:", text);
            throw new Error(text || "Network response was not ok");
          }
          return text ? JSON.parse(text) : {};
        });
      })
      .then((data) => {
        console.log("Response Data:", data);
        if (addCompanyDetails) {
          onUserDetailsUpdated(data);
        } else {
          onUserDetailsAdded(data);
        }
        handleSuccess();
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("An error occurred. Please try again.");
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSuccess() {
    setFormData({
      userId: null,
      userName: "",
      userEmail: "",
      userPhone: "",        
    });
    onCancel();
  }  

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <h2>{addCompanyDetails ? "Add Company Data" : "Add Company"}</h2>
      {error && <p className="error">{error}</p>}
      <div>
        <label>Company ID:</label>
        <input
          type="text"
          name="companyId"
          value={formData.companyId}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Company:</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Contact:</label>
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />
      </div>          
      
      <div className="form-actions">
        <button type="submit" className="btn-overview btn-green">
          {addCompanyDetails ? "Add" : "Save"}
        </button>
        <button
          type="button"
          className="btn-overview btn-red"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}