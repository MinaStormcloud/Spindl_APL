import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import DashboardOverview from "./DashboardOverview";
import DashboardBookings from "./DashboardBookings";

const DashboardContent = () => {
  let match = useMatch("/dashboard/*");

  return (
    <div style={{ flex: 1, padding: "10px" }}>
      <Routes>
        <Route path="" element={<DashboardOverview />} />        
        <Route path="bookings" element={<DashboardBookings />} />
      </Routes>
    </div>
  );
};

export default DashboardContent;