import React, { useState } from "react";
import SearchBar from "../../components/searchbar/SearchBar";
import Hero from "../../components/hero/Hero";
import "./Home.css"

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
      <Hero />      
      <SearchBar onSearch={handleSearch} />           
    </>
  );
}
