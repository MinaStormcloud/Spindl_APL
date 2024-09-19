import React from "react";
import "./Hero.css";
import "../../css/Buttons.css";
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/signin');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleSubscribe = () => {
    navigate('/subscribe');
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
            <button className="btn btn-gray-blue-reverse" onClick={handleSignUp}>Sign Up</button>
            <button className="btn btn-gray-blue" onClick={handleSignIn}>Sign In</button>
            <button className="btn btn-dark-blue" onClick={handleSubscribe}>Subscribe</button>
          </div>         
        </div>
      </div>
    </div>
  );
}