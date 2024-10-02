import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './NavBar.css'; 

const NavBar = () => {  

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  };
 
  return (
    <div className="topnav" id="topNavMenu">      
      <ul className="active">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>    
        <li><Link to="/subscribe">Newsletter</Link></li>
        <li><Link to="/privacy">Privacy</Link></li>
        <li className="icon">
        {/*<i className="fa fa-bars">=</i>  */}        
            <a href="/about" onClick={()=>this.handleLinkClick()}>About</a>
            <a href="/contact" onClick={()=>this.handleLinkClick()}>Contact</a>
            <a href="/subscribe" onClick={()=>this.handleLinkClick()}>Newsletter</a>
            <a href="/privacy" onClick={()=>this.handleLinkClick()}>Privacy</a>          
        </li>                
      </ul>
      <div>
        {/*When a user is logged in, this button says "Log out"*/}
        {/*<button className="btn-login-navbar" onClick={handleLogin}>Sign In</button> */} 
      
      </div>
    </div>
  );
};

export default NavBar;
