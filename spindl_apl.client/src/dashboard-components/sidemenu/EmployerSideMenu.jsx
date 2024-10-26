import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./SideMenu.css";


function EmployerSideMenu() {
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState("");

  useEffect(() => {
    setSelectedMenu(location.pathname);
  }, [location]);

  return (
    <div className="side-menu-container">
      <h2>Dashboard</h2>
      <Link
        to="/dashboard/employer"
        className={selectedMenu === "/dashboard/employer" ? "selected" : ""}>
         Overview
      </Link>      
      <Link
        to="/dashboard/employer/bookings"
        className={selectedMenu === "/dashboard/employer/bookings" ? "selected" : ""}>
        Bookings
      </Link>
      <Link
        to="/dashboard/employer/details"
        className={selectedMenu === "/dashboard/employer/details" ? "selected" : ""}>
         Company Profile
      </Link>
      <Link
        to="/"
        id="exit-dashboard"
        className={selectedMenu === "/" ? "selected" : ""}
      >
        Exit dashboard
      </Link>
    </div>
  );
}

export default EmployerSideMenu;