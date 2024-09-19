import React from 'react';
import Sidebar from './components/sidebar/Sidebar'; 
import Footer from './components/footer/Footer';

export default function Layout({ children }) {
	return (
	  <div>		
		<Sidebar />
		<div style={{ marginLeft: "200px" }}>
		  {children}
		</div>
		<Footer />		
	  </div>
	);
  }