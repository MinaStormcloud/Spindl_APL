import React from "react";
import './Logout.css'

export default function Logout() {

    setTimeout(function() {
        window.location.replace('/');
      }, 10000);

  return (
    <div id="logout">
      <div>        
        <h1 className="h1">Bye For Now!</h1>         
      </div>   
      <div>
        <p className="logout-paragraph">
        You have successfully logged out from your account, and you will be redirected in a moment.
        </p>              
      </div>           
    </div>
  );
}