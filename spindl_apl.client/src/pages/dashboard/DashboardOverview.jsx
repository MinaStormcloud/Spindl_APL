import React, { useState, useEffect } from "react";
import '../../dashboard-components/dashboard-css/DashboardOverview.css';

export default function DashboardOverview() {  
  const [bookingCount, setBookingCount] = useState(0);
  const [userCount, setUserCount] = useState(0);  

  useEffect(() => {
    const fetchData = async () => {
      try {        
        const bookingResponse = await fetch(
          "https://localhost:7127/api/Bookings"
        );
        const userResponse = await fetch("https://localhost:7127/api/Users");        

        if (          
          !bookingResponse.ok ||
          !userResponse.ok           
        ) {
          throw new Error("Failed to fetch data");
        }
        
        const bookingData = await bookingResponse.json();
        const userData = await userResponse.json();        

        setBookingCount(bookingData.length);
        setUserCount(userData.length);        
        
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error as needed
      }
    };

    fetchData();
  }, []);

  return (
    <div className="overview">
      <div className="overview-header">
        <h2>Overview</h2>
      </div>
      <div className="overview-row">        
        <div className="overview-card overview-col">
          <h5>Booked Meetings</h5>
          <h2>{bookingCount}</h2>
        </div>
        {<div className="overview-card overview-col">
          <h5>Registered Users</h5>
          <h2>{userCount}</h2>
        </div> }        
      </div>
      <div className="overview-row">
      {<div className="overview-card overview-col">
          <h5>Internship requests</h5>
          <h2>{userCount}</h2> {/**Change this */}
        </div> } 
        {<div className="overview-card overview-col">
          <h5>Available internships</h5>
          <h2>{userCount}</h2> {/**Change this */}
        </div> }
      </div>
    </div>
  );
}