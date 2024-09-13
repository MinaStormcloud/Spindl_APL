import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {   

  return (
    <nav>
      <Link to="/">
        <h1 >SpindlAPL</h1>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>           
        
      </ul>
    </nav>
  );
};

export default NavBar;