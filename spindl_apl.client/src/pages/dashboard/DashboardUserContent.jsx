import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import DashboardUserOverview from "./DashboardUserOverview";
import DashboardUserBookings from "./DashboardUserBookings";

const DashboardUserContent = () => {
  let match = useMatch("/dashboard/*");

  return (
    <div style={{ flex: 1, padding: "10px" }}>
      <Routes>
        <Route path="" element={<DashboardUserOverview />} />        
        <Route path="user/bookings" element={<DashboardUserBookings />} />
      </Routes>
    </div>
  );
};

export default DashboardUserContent;