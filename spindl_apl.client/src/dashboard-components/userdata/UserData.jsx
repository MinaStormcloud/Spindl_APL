import React, { useState, useEffect } from "react";
import "./UserData.css";

export default function UserData({
  onUserDetailsAdded,
  onUserDetailsUpdated,
  onCancel,  
  editUserDetails,
}) {
  const [formData, setFormData] = useState({
    userId: null,
    userName: "",
    userEmail: "",
    userPhone: "",      
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (editUserDetails) {
      setFormData({
        userId: editUserDetails.UserId,
        userName: editUserDetails.userName || "",
        userEmail: editUserDetails.userEmail || "",
        userPhone: editUserDetails.userPhone || "",          
      });
    } else {
      setFormData({
        userId: null,
        userName: "",
        userEmail: "",
        userPhone: "",          
      });
    }
  }, [editUserDetails]);

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

    const url = editUserDetails
      ? `https://localhost:7127/api/ApplicationUsers/${formData.userId}`
      : "https://localhost:7127/api/ApplicationUsers";
    const method = editUserDetails ? "PUT" : "POST";

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
        if (editUserDetails) {
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
      <h2>{editUserDetails ? "Edit User Data" : "Add User Data"}</h2>
      {error && <p className="error">{error}</p>}
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="userEmail"
          value={formData.userEmail}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="tel"
          name="userPhone"
          value={formData.userPhone}
          onChange={handleChange}
          required
        />
      </div>          
      
      <div className="form-actions">
        <button type="submit" className="btn-overview btn-green">
          {editUserDetails ? "Update" : "Save"}
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