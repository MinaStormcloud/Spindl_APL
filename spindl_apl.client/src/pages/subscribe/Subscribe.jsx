import React, { Fragment, useState } from "react";
import './Subscribe.css'

function Subscribe() {
    return (
        <div className="subscribe-wrapper">
            <article className="letter">
                <div className="side-title">
                    <h3 className="subscribe-title">Subscribe to our newsletter</h3>                    
                </div>
                <div className="side">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                <label for="lemail">Email</label>
                <input type="text" id="lemail" name="email" placeholder="Your Email.." />
                <button id="SendRequest"className="btn btn-dark-blue">Submit</button>
                </div>
            </article>
        </div>
    )
}

export default Subscribe;