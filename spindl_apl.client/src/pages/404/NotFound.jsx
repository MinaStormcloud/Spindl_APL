import React from "react";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div id="not-found">
      <div>        
        <h1 className="h1">404 - Not Found</h1>         
      </div>   
      <div>
        <p className="not-found-paragraph">
        This page is unavailable. We apologize for the inconvenience.
        </p>              
      </div>           
    </div>
  );
}