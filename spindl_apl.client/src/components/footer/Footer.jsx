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
          <h4>Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/register">Sign Up</Link>
          <Link to="/login">Sign In</Link>
          {/*<Link to="/subscribe">Newsletter</Link>*/}
          <Link to="/privacy">Privacy</Link>   
          {/*<Link to="/faq">FAQ</Link> */}       
        </div>        
        <div className="footer-col">
          <h4>Contributors</h4>              
          <a href="https://github.com/mattiasvlex" target="_blank">
            Mattias
          </a>
          <a href="https://github.com/MinaStormcloud" target="_blank">
            Amina
          </a>
          <a href="https://github.com/Filip-d-v" target="_blank">
            Filip
          </a>
          <a href="https://github.com/ZainabDaebes21" target="_blank">
            Zainab
          </a>
        </div>
        {/*<div className="footer-col">
          <h4 className="h4-contact">Contact Us</h4>
          <p className="contactinfo">
            (+46) TBD
          </p>
          <p className="contactinfo">
            TBD
          </p>
        </div>*/}
      </div>
      <hr />
      <div className="footer-bottom-row">
        <p>&copy; 2024 Spindl AB - All Rights Reserved</p>
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
