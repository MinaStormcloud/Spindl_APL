import React, { Fragment, useState } from "react";
import './Subscribe.css'

function Subscribe() {
    return (
        <div className="subscribe-wrapper">
            <article className="letter">
                <div className="subscribe-side-title">
                    <h3 className="subscribe-title">Get Our Monthly Newsletter</h3>                    
                </div>
                <div className="subscribe-side">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your First Name..." />

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your Last Name..." />

                <label for="lemail">Email</label>
                <input type="text" id="lemail" name="email" placeholder="Your Email Address..." />
                <button id="SendRequest"className="btn btn-dark-gray">Subscribe</button>
                </div>
            </article>
        </div>
    )
}

export default Subscribe;