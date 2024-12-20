import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const dummyClick = (event) => {
  event.preventDefault();
};

export default function Footer() {
  return (
    <footer>
      <div className="footer-nav">
        <div className="footer-col">
        <h2 className="brandname">Spindl AB</h2>
          <p className="contactinfo">Bantorget 2</p>
          <p className="contactinfo">222 29 Lund</p>
          <p className="contactinfo">Sweden</p>
        </div>
        <div className="footer-col">
          <h4>Facts</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>   
          <Link to="/faq">FAQ</Link>    
          <Link to="/partners">Partners</Link>     
          <Link to="/privacy">Privacy</Link>                                          
        </div>
        <div className="footer-col">
          <h4>Connect</h4>            
          <Link to="/contact">Contact</Link>          
          <Link to="/subscribe">Newsletter</Link> 
          <Link to="/login">Sign In</Link>
          <Link to="/register">Sign Up</Link>          
          <Link to="/support">Support</Link>                                
        </div>         
      </div>
      <hr />
      <div className="footer-bottom-row">
        <p className="copyright">&copy; 2024 Spindl AB - All Rights Reserved</p>
        <ul>
          <li>
            <a href="#" onClick={dummyClick}>
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="#" onClick={dummyClick}>
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" onClick={dummyClick}>
              Cookie policy
            </a>
          </li>
        </ul>        
      </div>
    </footer>
  );
}