import React, { useState, useEffect } from "react";
import BookingForm from '../../dashboard-components/bookingform/BookingForm';
import SideMenu from '../../dashboard-components/sidemenu/UserSideMenu';
/*This page needs to be customized to fetch all bookings 
matching the user ID of the user that just logged in*/

export default function DashboardUserBookings() {
  const [bookings, setBookings] = useState([]);  
  const [showInputForm, setShowInputForm] = useState(false);
  const [editBookingData, setEditBookingData] = useState(null);

  useEffect(() => {
    fetchBookings();    
  }, []);

  const fetchBookings = () => {
    fetch("https://localhost:7127/api/Bookings")
      .then((response) => response.json())
      .then((data) => setBookings(data))
      .catch((error) => console.error("Error fetching bookings:", error));
  };  

  const handleBookingAdded = (newBooking) => {
    fetchBookings();
    setShowInputForm(false);
  };

  const handleBookingUpdated = (updatedBooking) => {
    fetchBookings();
    setShowInputForm(false);
    setEditBookingData(null);
  };

  const handleEdit = (booking) => {
    setEditBookingData(booking);
    setShowInputForm(true);
  };

  const handleCancelForm = () => {
    setShowInputForm(false);
    setEditBookingData(null);
  };  

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "var(--green)";
      case "Pending":
        return "var(--orange)";
      case "Cancelled":
        return "var(--red)";
      default:
        return "black"; // default color if status does not match
    }
  };

  return (
    <div className="dashboard-container">
      <SideMenu />
      <div className="dashboard">
      <div className="dashboard-header">
        <h2>Bookings</h2>        
      </div>

      {showInputForm && (
        <BookingForm
          onBookingAdded={handleBookingAdded}
          onBookingUpdated={handleBookingUpdated}
          onCancel={handleCancelForm}         
          editBookingData={editBookingData}
          fetchBookings={fetchBookings} // Pass fetchBookings as a prop
        />
      )}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>            
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>            
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.bookingId}>
              <td>{booking.guestName}</td>
              <td>{booking.guestEmail}</td>
              <td>{booking.guestPhone}</td>              
              <td>{new Date(booking.bookingDate).toLocaleDateString()}</td>              
              <td style={{ color: getStatusColor(booking.status) }}>
                {booking.status}
              </td>              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    
  );
}