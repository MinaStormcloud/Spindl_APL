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
        to="/dashboard/admin"
        className={selectedMenu === "/dashboard/admin" ? "selected" : ""}>
         Overview
      </Link>      
      <Link
        to="/dashboard/admin/bookings"
        className={selectedMenu === "/dashboard/admin/bookings" ? "selected" : ""}>
         Bookings
      </Link>
      <Link
        to="/dashboard/admin/allemployers"
        className={selectedMenu === "/dashboard/admin/allemployers" ? "selected" : ""}>
         Employers
      </Link>
      <Link
        to="/dashboard/admin/allusers"
        className={selectedMenu === "/dashboard/admin/allusers" ? "selected" : ""}>
         Users
      </Link>
      <Link
        to="/dashboard/admin/internships"
        className={selectedMenu === "/dashboard/admin/internships" ? "selected" : ""}>
         Internships
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