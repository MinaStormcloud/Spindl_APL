import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import DashboardEmployerOverview from "./DashboardEmployerOverview";
import DashboardEmployerBookings from "./DashboardEmployerBookings";
import DashboardEmployerDetails from "./DashboardEmployerDetails";

const DashboardEmployerContent = () => {
  let match = useMatch("/dashboard/*");

  return (
    <div style={{ flex: 1, padding: "10px" }}>
      <Routes>
        <Route path="" element={<DashboardEmployerOverview />} />        
        <Route path="employer/bookings" element={<DashboardEmployerBookings />} />
        <Route path="employer/details" element={<DashboardEmployerDetails />} />
      </Routes>
    </div>
  );
};

export default DashboardEmployerContent;