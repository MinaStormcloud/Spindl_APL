import React from 'react';
import Sidebar from './components/sidebar/Sidebar'; 
import Footer from './components/footer/Footer';
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
	return (
	  <div>		
		<Sidebar />
		<div className="flex justify-center m-4" style={{ marginLeft: "200px" }}>
		  {children}
		</div>
		<Footer />
	  </div>
	);
  }