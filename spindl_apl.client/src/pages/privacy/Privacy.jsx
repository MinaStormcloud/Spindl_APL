import React from "react";
import './Privacy.css'

export default function Privacy() {
  return (
    <div id="privacy">
      <div className="grid">
          <div className="img privacy"></div>
          <div className="container">
            <h1 className="privacy-h1">Privacy Policy</h1>
            <p className="privacy-paragraph">
			      We manage data in accordance with applicable laws, which might be subject to change.
			      </p>
          </div>
        </div>           
    </div>
  );
}