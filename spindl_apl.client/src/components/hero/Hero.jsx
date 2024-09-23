import React from "react";
import "./Hero.css";
import "../../css/Buttons.css";
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };  

  return (
    <div>
      <div className="hero-bg">
        <div className="hero-content">
          <div>
            <h1>Looking for an internship?</h1>
            <p>
              Connect with our internship providers!
            </p>
          </div> 
          <div className="hero-btns">
            <button className="btn btn-gray-blue-reverse" onClick={handleRegister}>Sign Up</button>
            <button className="btn btn-gray-blue" onClick={handleLogin}>Sign In</button>            
          </div>         
        </div>
      </div>
    </div>
  );
}