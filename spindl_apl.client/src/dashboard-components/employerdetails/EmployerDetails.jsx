import React, { useState, useEffect } from "react";
import "./EmployerDetails.css";

export default function EmployerDetails({
  onEmployerDetailsAdded,
  onEmployerDetailsUpdated,
  onCancel,  
  editEmployerDetails,
}) {
  const [formData, setFormData] = useState({
    companyId: null,
    name: "",
    location: "",
    contact: "",      
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (editEmployerDetails) {
      setFormData({
        companyId: editEmployerDetails.CompanyId,
        name: editEmployerDetails.name || "",
        location: editEmployerDetails.location || "",
        contact: editEmployerDetails.contact || "",          
      });
    } else {
      setFormData({
        companyId: null,
        name: "",
        location: "",
        contact: "",          
      });
    }
  }, [editEmployerDetails]);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      formData.name.trim() === "" ||
      formData.location.trim() === "" ||
      formData.contact.trim() === ""       
    ) {
      setError("Please fill out all fields");
      return;
    }

    setError("");

    const body = {
      companyId: formData.companyId ?? 0,
      name: formData.name,
      location: formData.location,
      contact: formData.contact,      
    };

    console.log("Request Body:", body);

    const url = editEmployerDetails
      ? `https://localhost:7127/api/Companies/${formData.companyId}`
      : "https://localhost:7127/api/Companies";
    const method = editEmployerDetails ? "PUT" : "POST";

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
        if (editEmployerDetails) {
          onEmployerDetailsUpdated(data);
        } else {
          onEmployerDetailsAdded(data);
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
      companyId: null,
      name: "",
      location: "",
      contact: "",        
    });
    onCancel();
  }  

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <h2>{editEmployerDetails ? "Edit Employer Data" : "Edit Company Profile"}</h2>
      {error && <p className="error">{error}</p>}
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
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
          {editEmployerDetails ? "Update" : "Save"}
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