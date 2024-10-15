import React from "react";
import DashboardEmployerContent from "./DashboardEmployerContent";
import '../../dashboard-components/dashboard-css/Dashboard.css';
import EmployerSideMenu from '../../dashboard-components/sidemenu/EmployerSideMenu';

const DashboardEmployer = () => {
  return (
    <div className="dashboard-container">   
      <EmployerSideMenu />   
      <DashboardEmployerContent />
    </div>
  );
};

export default DashboardEmployer;