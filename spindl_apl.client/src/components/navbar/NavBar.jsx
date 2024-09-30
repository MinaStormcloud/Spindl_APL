import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 


const NavBar = () => {  
  
  return (
    <div className="topnav" id="topNavMenu">
      <ul className="active">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>    
        <li><Link to="/subscribe">Newsletter</Link></li>
        <li><Link to="/privacy">Privacy</Link></li>
        <li class="icon">
        <a href="javascript:void(0);" onclick="toggleMenu()">
          <i class="fa fa-bars">=</i></a>
      </li>                
      </ul>
    </div>
  );
};

export default NavBar;