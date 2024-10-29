import React from 'react';
import NavBar from './components/navbar/NavBar'; 
import Footer from './components/footer/Footer';
{/**This page contains the basic front end layout */}

export default function Layout({ children }) {
	return (
	  <div>	
		<NavBar />	
		<div style={{ marginLeft: "0px" }}>
		  {children}
		</div>
		<Footer />		
	  </div>
	);
  }