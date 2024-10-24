import React, { useState, useEffect } from "react";
import UserDetails from '../../../dashboard-components/userdetails/UserDetails';
import UserSideMenu from '../../../dashboard-components/sidemenu/UserSideMenu';
/*This page needs to be customized to fetch all bookings 
matching the user ID of the user that just logged in*/

export default function DashboardUserDetails() {
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
        <UserSideMenu />
          <div className="dashboard">      
          <div className="dashboard-header">
            <h2>My Profile</h2>
            <button className="btn btn-gray-blue-responsive" onClick={() => setShowInputForm(true)}>
              Update Contact Info
            </button>
          </div>
  
          {showInputForm && (
            <UserDetails
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
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.bookingId}>
                  <td>{booking.userName}</td>
                  <td>{booking.userEmail}</td>
                  <td>{booking.userPhone}</td>                 
                  <td>
                    <button
                      className="btn-overview btn-blue"
                      onClick={() => handleEdit(booking)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn-overview btn-red"
                      onClick={() => {
                        if (
                          window.confirm(
                            `Are you sure you want to delete booking with ID ${booking.bookingId}?`
                          )
                        ) {
                          fetch(
                            `https://localhost:7127/api/Bookings/${booking.bookingId}`,
                            {
                              method: "DELETE",
                            }
                          )
                            .then((response) => {
                              if (response.ok) {
                                const updatedBookings = bookings.filter(
                                  (b) => b.bookingId !== booking.bookingId
                                );
                                setBookings(updatedBookings);
                              } else {
                                throw new Error("Failed to delete booking");
                              }
                            })
                            .catch((error) =>
                              console.error("Error deleting booking:", error)
                            );
                        }
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>    
    );
  }