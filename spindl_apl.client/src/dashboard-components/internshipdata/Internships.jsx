import React, { useState, useEffect } from "react";
import "./Internships.css";

export default function Internships({
  onInternshipAdded,
  onInternshipUpdated,
  onCancel,  
  editInternshipData,
}) {
  const [formData, setFormData] = useState({
    internshipId: null,
    userName: "",
    userEmail: "",
    userPhone: "",    
    internshipDate: "",    
    status: "Pending", // Default status
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (editInternshipData) {
      setFormData({
        internshipId: editInternshipData.internshipId,
        userName: editInternshipData.userName || "",
        userEmail: editInternshipData.userEmail || "",
        userPhone: editInternshipData.userPhone || "",        
        internshipDate: editInternshipData.internshipDate.split("T")[0], // Extract only the date part        
        status: editInternshipData.status,
      });
    } else {
      setFormData({
        internshipId: null,
        userName: "",
        userEmail: "",
        userPhone: "",        
        internshipDate: "",        
        status: "Pending",
      });
    }
  }, [editInternshipData]);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      formData.userName.trim() === "" ||
      formData.userEmail.trim() === "" ||
      formData.userPhone.trim() === "" ||        
      formData.internshipDate.trim() === ""
    ) {
      setError("Please fill out all fields");
      return;
    }

    setError("");

    const body = {
      internshipId: formData.internshipId ?? 0,
      userName: formData.userName,
      userEmail: formData.userEmail,
      userPhone: formData.userPhone,      
      internshipDate: formData.checkInDate,      
      status: formData.status,
    };

    console.log("Request Body:", body);

    const url = editInternshipData
      ? `https://localhost:7127/api/Internships/${formData.internshipId}`
      : "https://localhost:7127/api/Internships";
    const method = editInternshipData ? "PUT" : "POST";

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
        if (editInternshipData) {
          onInternshipUpdated(data);
        } else {
          onInternshipAdded(data);
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
      internshipId: null,
      userName: "",
      userEmail: "",
      userPhone: "",      
      internshipDate: "",
      status: "Pending",
    });
    onCancel();
  }  

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <h2>{editInternshipData ? "Edit Internship" : "Add Internship"}</h2>
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
      <div>
        <label>Start Date:</label>
        <input
          type="date"
          name="internshipDate"
          value={formData.internshipDate}
          onChange={handleChange}
          required
        />
      </div>      
      <div>
        <label>Status:</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>
      <div className="form-actions">
        <button type="submit" className="btn-overview btn-green">
          {editInternshipData ? "Update" : "Create"}
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