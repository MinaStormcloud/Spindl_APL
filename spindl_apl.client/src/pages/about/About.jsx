import React from "react";
import './About.css'

export default function About() {
  return (
    <div id="about">
      <div>        
        <h1 className="h1">About Us</h1>         
      </div>   
      <div>
        <p className="about-paragraph">
        Spindl AB was founded in Lund, Sweden, in the spring of 2024, and we enlisted a team of interns to help us create this website for the purpose of connecting job applicants with potential employers through internships. Our online service enables employers to list available internships, with or without the possibility of future permanent employment. Both employers and job seekers can create accounts and/or subscribe to our newsletter to receive alerts about opportunities.
        </p>
        <p className="about-paragraph">
        Our online service is an excellent example of how internship can build bridges into the job market. The students who created this application were trained by Lexicon in Malmoe. After completing courses in C#, React, Python and Azure, they joined us to design and implement this website. By providing this service, we are hoping to help job seekers connect with employers who are open to connecting with junior developers who might be senior in other areas of skills and experience.
        </p>
        <p className="about-paragraph">
        There are plenty of job opportunities out there for senior software developers, but in order to become senior, everyone junior candidate needs a chance to gain that experience. Our aim is to help bridge the gap between the skillsets of job seekers and the requirements of the tech job market. Candidates with the right mindset can learn the required skills, and our service can connect them with employers who need them in their teams. You are more than welcome to get in touch with us to learn more about our services.
        </p>        
      </div>   
    </div>
  );
}