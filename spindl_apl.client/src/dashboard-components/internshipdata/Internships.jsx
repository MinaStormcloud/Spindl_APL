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
	  companyId: "",
    company: "",
    numberOfStudents: "",    
    dateFrom: "",    
    dateTo: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (editInternshipData) {
      setFormData({
        internshipId: editInternshipData.internshipId,
        companyId: editInternshipData.companyId || "",
        company: editInternshipData.company || "",
        numberOfStudents: editInternshipData.numberOfStudents || "",        
        dateFrom: editInternshipData.dateFrom.split("T")[0], // Extract only the date part        
        dateTo: editInternshipData.dateTo.split("T")[0], // Extract only the date part
      });
    } else {
      setFormData({
        internshipId: null,
        companyId: "",
        company: "",
        numberOfStudents: "", 
		dateFrom: "",		
        dateTo: "",          
      });
    }
  }, [editInternshipData]);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      formData.companyId.trim() === "" ||
      formData.company.trim() === "" ||
      formData.numberOfStudents.trim() === "" || 
	  formData.dateFrom.trim() === "" || 	  
      formData.dateTo.trim() === ""
    ) {
      setError("Please fill out all fields");
      return;
    }

    setError("");

    const body = {
      internshipId: formData.internshipId ?? 0,
      companyId: formData.companyId,
      company: formData.company,
      numberOfStudents: formData.numberOfStudents,      
      dateFrom: formData.dateFrom,      
      dateTo: formData.dateTo,
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
      companyId: "",
      company: "",
      numberOfStudents: "", 
	  dateFrom: "",	  
      dateTo: "",      
    });
    onCancel();
  }  

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <h2>{editInternshipData ? "Edit Internship" : "Add Internship"}</h2>
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
        <label>Number of Students:</label>
        <input
          type="text"
          name="numberOfStudents"
          value={formData.numberOfStudents}
          onChange={handleChange}
          required
        />
      </div>      
      <div>
        <label>Start Date:</label>
        <input
          type="date"
          name="dateFrom"
          value={formData.dateFrom}
          onChange={handleChange}
          required
        />
      </div> 
	  <div>
        <label>End Date:</label>
        <input
          type="date"
          name="dateTo"
          value={formData.dateTo}
          onChange={handleChange}
          required
        />
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