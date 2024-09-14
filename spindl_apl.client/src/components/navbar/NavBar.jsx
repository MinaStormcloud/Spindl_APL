import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) =>{
  return(
      <>
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
          <Link to="/Employers">
              <li className="nav-item nav-link">Employers</li>
          </Link>
          </nav>
      </>
  )
}



export default NavBar