import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./SideMenu.css";


function UserSideMenu() {
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState("");

  useEffect(() => {
    setSelectedMenu(location.pathname);
  }, [location]);

  return (
    <div className="side-menu-container">
      <h2>Dashboard</h2>
      <Link
        to="/dashboard/user"
        className={selectedMenu === "/dashboard/user" ? "selected" : ""}>
         Overview
      </Link>      
      <Link
        to="/dashboard/user/bookings"
        className={selectedMenu === "/dashboard/user/bookings" ? "selected" : ""}>
         My Bookings
      </Link>
      <Link
        to="/dashboard/user/details"
        className={selectedMenu === "/dashboard/user/details" ? "selected" : ""}>
         My Profile
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

export default UserSideMenu;