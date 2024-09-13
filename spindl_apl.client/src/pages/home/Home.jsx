import React, { useState } from "react";
import List from "../../components/list/List";
import SearchBar from "../../components/searchbar/SearchBar";

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
    <h1>Hello World!</h1>    
      <SearchBar onSearch={handleSearch} /> 
      <List />     
    </>
  );
}
