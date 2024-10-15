import React from "react";
import DashboardUserContent from "./DashboardUserContent";
import '../../dashboard-components/dashboard-css/Dashboard.css';
import UserSideMenu from '../../dashboard-components/sidemenu/UserSideMenu';

const DashboardUser = () => {
  return (
    <div className="dashboard-container">
      <UserSideMenu />      
      <DashboardUserContent />
    </div>
  );
};

export default DashboardUser;