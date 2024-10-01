import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./SideMenu.css";


function SideMenu() {
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState("");

  useEffect(() => {
    setSelectedMenu(location.pathname);
  }, [location]);

  return (
    <div className="side-menu-container">
      <h2>Dashboard</h2>
      <Link
        to="/dashboard"
        className={selectedMenu === "/dashboard" ? "selected" : ""}>
         Overview
      </Link>      
      <Link
        to="/dashboard/bookings"
        className={selectedMenu === "/dashboard/bookings" ? "selected" : ""}>
         Bookings
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

export default SideMenu;