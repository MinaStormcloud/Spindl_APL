import React from 'react';
import SideBar from './components/sidebar/SideBar'; 
import Footer from './components/footer/Footer';

export default function Layout({ children }) {
	return (
	  <div>		
		<SideBar />
		<div style={{ marginLeft: "200px" }}>
		  {children}
		</div>
		<Footer />		
	  </div>
	);
  }