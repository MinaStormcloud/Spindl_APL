import React, { useState, useEffect } from "react";
import BookingForm from '../../../dashboard-components/bookingform/BookingForm';
import UserSideMenu from '../../../dashboard-components/sidemenu/UserSideMenu';
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

  const handleCancelForm = () => {
    setShowInputForm(false);
    setEditBookingData(null);
  };  
  
  return (
    <div className="dashboard-container">
      <UserSideMenu />
      <div className="dashboard">
      <div className="dashboard-header">
        <h2>Bookings</h2> 
        <button className="btn btn-gray-blue-responsive" onClick={() => setShowInputForm(true)}>
            Add Booking
          </button>       
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
            <th className="th-optional">Email</th>
            <th>Phone</th>                        
            <th>Date</th>
            <th>Time</th>                       
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.bookingId}>
              <td>{booking.userName}</td>
              <td>{booking.userEmail}</td>
              <td>{booking.userPhone}</td>                         
              <td>{new Date(booking.bookingDate).toLocaleDateString()}</td>                           
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>    
  );
}