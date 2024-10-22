import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import DropdownMenu from "./DropdownMenu";
import './NavBar.css'; 

const NavBar = () => {  

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    navigate('/logout');
  };

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
 
  return (
    <div>
      <div className="topnav">      
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>    
          {/*<li><Link to="/subscribe">Newsletter</Link></li>*/}
          <li><Link to="/privacy">Privacy</Link></li>
          {/*<li><Link to="/faq">FAQ</Link></li> */}                      
        </ul> 
        <div>
        {/*When a user is logged in, the Logout button shall be displayed"*/}
        <button className="btn-login-navbar" onClick={handleLogin}>Sign In</button> 
        {/*<button className="btn-logout-navbar" onClick={handleLogout}>Sign Out</button> */}       
      </div>             
      </div>      
      <div className="dropdown-menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
            <button className="btn-login-mini" onClick={handleLogin}>Sign In</button>
            {/*<button className="btn-logout-mini" onClick={handleLogout}>Sign Out</button>*/}
          <button className="btn-dropdown"><b>=</b></button>          
            {isDropdownVisible && <DropdownMenu />}            
      </div>            
    </div>
  );
};

export default NavBar;
