import { useState, useEffect } from "react";
import "./SearchBar.css";
import "../../css/Buttons.css";

function SearchBar({ onSearch }) {
  const [internships, setInternships] = useState([]);  
  const [keywords, setKeywords] = useState([]);
  const [selectedKeyword, setSelectedKeyword] = useState("");

  useEffect(() => {
    fetch("./internships.json")
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
        <select
          name="keyword"
          id="keyword"
          value={selectedKeyword}
          onChange={handleKeywordChange}
          required
        >
          <option value="" disabled>
            Select Internship Provider
          </option>
          {keywords.map((keyword) => (
            <option key={keyword} value={keyword}>
              {keyword}
            </option>
          ))}
        </select>
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
      <button className="btn btn-dark-blue">Search</button>
    </form>
  );
}

export default SearchBar;