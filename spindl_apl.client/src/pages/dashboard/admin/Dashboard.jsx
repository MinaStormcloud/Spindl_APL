import React from "react";
import SideMenu from '../../../dashboard-components/sidemenu/SideMenu';
import DashboardContent from "./DashboardContent";
import '../../../dashboard-components/dashboard-css/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <SideMenu />
      <DashboardContent />
    </div>
  );
};

export default Dashboard;