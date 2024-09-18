import { useState, useEffect } from "react";
import "./SearchBar.css";
import "../../css/Buttons.css";
import data from './internships.json';

function SearchBar({ onSearch }) {
  const [internships, setInternships] = useState([]);  
  const [keywords, setKeywords] = useState([]);
  const [selectedKeyword, setSelectedKeyword] = useState("");
  
  useEffect(() => {
    fetch("")
      .then((response) => response.json())
      .then((data) => {
        
        const searchResults = [
          ...new Set(data.map((internship) => internship.provider)),
        ];
        setKeywords(searchResults);
        setInternships(data);
      })
      .catch((error) => console.error("Error fetching results:", error));
  }, []);

  const handleKeywordChange = (event) => {
    setSelectedKeyword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(selectedKeyword);
    localStorage.setItem("keyword", selectedKeyword);
    localStorage.setItem("startDate", document.getElementById("start-date").value);
    localStorage.setItem("endDate", document.getElementById("end-date").value);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div>
        <h4>Internship provider</h4>
        <input type="text" id="keywords" onkeyup="getResults()" placeholder="Search for a company name, a location, or a number of internship positions." title="Type in a company name"></input>
      </div>
      <div>
        <h4>From</h4>
        <input id="start-date" type="date" required />
      </div>
      <div>
        <h4>To</h4>
        <input id="end-date" type="date" required />
      </div>
      <p></p>
      <button className="btn btn-gray-blue">Search</button>
    </form>
  );
}

export default SearchBar;