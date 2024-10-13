import React from "react";
import DashboardUserContent from "./DashboardUserContent";
import '../../dashboard-components/dashboard-css/Dashboard.css';

const DashboardUser = () => {
  return (
    <div className="dashboard-container">      
      <DashboardUserContent />
    </div>
  );
};

export default DashboardUser;