import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import DashboardUserOverview from "./DashboardUserOverview";
import DashboardUserBookings from "./DashboardUserBookings";
import DashboardUserDetails from "./DashboardUserDetails";

const DashboardUserContent = () => {
  let match = useMatch("/dashboard/*");

  return (
    <div style={{ flex: 1, padding: "10px" }}>
      <Routes>
        <Route path="" element={<DashboardUserOverview />} />        
        <Route path="user/bookings" element={<DashboardUserBookings />} />
        <Route path="user/details" element={<DashboardUserDetails />} />
      </Routes>
    </div>
  );
};

export default DashboardUserContent;