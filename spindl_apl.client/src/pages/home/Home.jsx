import React, { useState } from "react";
import SearchBar from "../../components/searchbar/SearchBar";
import SideBar from "../../components/sidebar/SideBar";

export default function Home() {
  const [filter, setFilter] = useState(null);

  const handleSearch = (destination) => {
    setFilter(null); // Reset filter first
    setTimeout(() => {
      setFilter(destination);
    }, 0); // Delay to ensure the reset takes effect before applying new filter
  };

  return (
    <>  
      <div>
        <h1 id="tableLabel">Looking for an internship?</h1>
        <p>Connect with our internship providers through our online service!</p>
      </div>
      <SideBar />     
      <SearchBar onSearch={handleSearch} />           
    </>
  );
}
