import React, { useState, useEffect } from "react";
import "./BookingForm.css";

export default function BookingForm({
  onBookingAdded,
  onBookingUpdated,
  onCancel,  
  editBookingData,
}) {
  const [formData, setFormData] = useState({
    bookingId: null,
    userName: "",
    userEmail: "",
    userPhone: "",    
    bookingDate: "",    
    status: "Pending", // Default status
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (editBookingData) {
      setFormData({
        bookingId: editBookingData.bookingId,
        userName: editBookingData.userName || "",
        userEmail: editBookingData.userEmail || "",
        userPhone: editBookingData.userPhone || "",        
        bookingDate: editBookingData.bookingDate.split("T")[0], // Extract only the date part        
        status: editBookingData.status,
      });
    } else {
      setFormData({
        bookingId: null,
        userName: "",
        userEmail: "",
        userPhone: "",        
        bookingDate: "",        
        status: "Pending",
      });
    }
  }, [editBookingData]);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      formData.userName.trim() === "" ||
      formData.userEmail.trim() === "" ||
      formData.userPhone.trim() === "" ||        
      formData.bookingDate.trim() === ""
    ) {
      setError("Please fill out all fields");
      return;
    }

    setError("");

    const body = {
      bookingId: formData.bookingId ?? 0,
      userName: formData.userName,
      userEmail: formData.userEmail,
      userPhone: formData.userPhone,      
      bookingDate: formData.checkInDate,      
      status: formData.status,
    };

    console.log("Request Body:", body);

    const url = editBookingData
      ? `https://localhost:7127/api/Bookings/${formData.bookingId}`
      : "https://localhost:7127/api/Bookings";
    const method = editBookingData ? "PUT" : "POST";

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
        if (editBookingData) {
          onBookingUpdated(data);
        } else {
          onBookingAdded(data);
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
      bookingId: null,
      userName: "",
      userEmail: "",
      userPhone: "",      
      bookingDate: "",
      status: "Pending",
    });
    onCancel();
  }  

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <h2>{editBookingData ? "Edit Booking" : "Add Booking"}</h2>
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
        <label>Booking Date:</label>
        <input
          type="date"
          name="bookingDate"
          value={formData.bookingDate}
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
          {editBookingData ? "Update" : "Create"}
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