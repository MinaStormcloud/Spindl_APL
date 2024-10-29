import React from "react";
import './Logout.css'

export default function Logout() {
  
    setTimeout(function() {
        window.location.replace('/');
      }, 10000);

  return (
    <div id="logout">
      <div className="logout-grid">
          <div className="img logout"></div>
          <div className="logout-container">
            {/** This page is displayed for 10 seconds
             before redirecting users to the Home page */}
            <h1 className="logout-h1">Bye For Now!</h1>
            <p className="logout-paragraph">
			      You have successfully logged out, and you will be redirected shortly.
			      </p>
          </div>
        </div>          
    </div>
  );
}