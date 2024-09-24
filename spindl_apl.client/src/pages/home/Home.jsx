import React, { useState } from "react";
import SearchBar from "../../components/searchbar/SearchBar";
import Hero from "../../components/hero/Hero";
import "./Home.css";
import data from "../../components/searchbar/internships.json"; // Kontrollera sökvägen till JSON-filen
 
export default function Home() {
  const [filter, setFilter] = useState({ provider: "", location: "", positions: "" });
  const [filteredResults, setFilteredResults] = useState(data); // Inledningsvis visa alla internships

  const handleSearch = (searchParams) => {
    setFilter(searchParams); // Uppdatera filterstaten med sökparametrarna

    // Filtrera resultaten baserat på sökparametrarna
    const filtered = data.filter((item) => {
      return (
        (searchParams.provider === "" || item.provider.toLowerCase().includes(searchParams.provider.toLowerCase())) &&
        (searchParams.location === "" || item.location.toLowerCase().includes(searchParams.location.toLowerCase())) &&
        (searchParams.positions === "" || item.positions.toLowerCase().includes(searchParams.positions.toLowerCase()))
      );
    });

    setFilteredResults(filtered); // Uppdatera resultatet som visas baserat på filtreringen
  };
 
  return (
    <>        
      <Hero />      
      <SearchBar onSearch={handleSearch} />  
      <div>
        <h2>Filtered Results</h2>
        {filteredResults && filteredResults.length > 0 ? (
          filteredResults.map((item, index) => (
            <table key={index}>
              <thead>
                <tr className="tr-font">            
                  <th scope="col">Internship Provider</th>
                  <th scope="col">Location</th>
                  <th scope="col">Positions</th>            
                </tr>
              </thead>
              <tbody>
                <tr>            
                  <th scope="row">{item.provider}</th>
                  <td>{item.location}</td>
                  <td>{item.positions}</td>
                </tr>
              </tbody>
            </table>
          ))
        ) : (
          <h3>No results found!</h3>
        )}
      </div>        
    </>
  );
}
