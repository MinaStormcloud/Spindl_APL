import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
  
    const handleLogout = (event) => {
      event.preventDefault(); // Prevent default link behavior
      localStorage.removeItem("token");
      navigate("/login");
    };
  
    return (
        <nav className='navbar'>
        <Link to="/Home">
            <div className="logo"></div>
        </Link>
        <Link to="/Home">
            <li className="nav-item nav-link">Home</li>
        </Link>
        <Link to="/About">
            <li className="nav-item nav-link">About</li>
        </Link>
        <Link to="/Contact">
            <li className="nav-item nav-link">Contact</li>
        </Link>
        </nav>
    );
  };
  
  export default NavBar;