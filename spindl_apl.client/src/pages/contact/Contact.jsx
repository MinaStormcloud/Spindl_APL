import React from "react";
import './Contact.css'

function Contact() {
    return (
        <div className="contact-wrapper">
            <article className="letter">
                <div className="side">
                    <h3 className="contact-title">Contact Us</h3>
                    <p>
                        <textarea placeholder="Your Message..."></textarea>
                    </p>
                </div>

                <div className="side">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your First Name..." />

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your Last Name..." />

                <label for="lemail">Email</label>                
                <input type="text" id="lemail" name="email" placeholder="Your Email Address..." />
                <button id="SendMessage"className="btn btn-dark-gray">Submit</button>
                </div>
            </article>
        </div>
    )
}

export default Contact;