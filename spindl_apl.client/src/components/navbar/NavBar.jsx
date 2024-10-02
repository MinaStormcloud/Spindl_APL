import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import './NavBar.css'; 

const NavBar = () => {  
  
  return (
    <div className="topnav" id="topNavMenu">
      <ul className="active">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>    
        <li><Link to="/subscribe">Newsletter</Link></li>
        <li><Link to="/privacy">Privacy</Link></li>
        <li className="icon">
        { <i className="fa fa-bars">=</i>  }        
              <a href="/about" onClick={()=>this.handleLinkClick()}>About Us</a>
              <a href="/contact" onClick={()=>this.handleLinkClick()}>Contact Us</a>
              <a href="/subscribe" onClick={()=>this.handleLinkClick()}>Newsletter</a>
              <a href="/privacy" onClick={()=>this.handleLinkClick()}>Privacy</a>          
        </li>                
      </ul>
    </div>
  );
};

export default NavBar;
