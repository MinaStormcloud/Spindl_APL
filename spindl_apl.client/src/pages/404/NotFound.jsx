import React from "react";
import './NotFound.css'

export default function NotFound() {
  return (
    <div id="not-found">
      <div className="grid">
          <div className="img not-found"></div>
          <div className="container">
            <h1 className="not-found-h1">404: Not Found</h1>
            <p className="not-found-paragraph">
			      This page is unavailable. We apologize for the inconvenience.
			      </p>
          </div>
        </div>           
    </div>
  );
}