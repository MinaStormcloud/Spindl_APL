import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import DashboardOverview from "./DashboardOverview";
import DashboardBookings from "./DashboardBookings";
import DashboardAllEmployers from "./DashboardAllEmployers";
import DashboardAllUsers from "./DashboardAllUsers";
import DashboardInternships from "./DashboardInternships";

const DashboardContent = () => {
  let match = useMatch("/dashboard/admin/*");

  return (
    <div style={{ flex: 1, padding: "10px" }}>
      <Routes>
        <Route path="" element={<DashboardOverview />} />        
        <Route path="bookings" element={<DashboardBookings />} />
        <Route path="allemployers" element={<DashboardAllEmployers />} />
        <Route path="allusers" element={<DashboardAllUsers />} />
        <Route path="internships" element={<DashboardInternships />} />
      </Routes>
    </div>
  );
};

export default DashboardContent;