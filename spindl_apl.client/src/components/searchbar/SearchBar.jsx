import { useState, useEffect } from "react";
import "./SearchBar.css";
import "../../css/Buttons.css";
import data from './internships.json';

function SearchBar({ onSearch }) {
  //const [internships, setInternships] = useState([]);  
  //const [keywords, setKeywords] = useState([]);
  //const [selectedKeyword, setSelectedKeyword] = useState("");

  const CHAR = data;
  const [name, setName] = useState('');
  const [foundCHAR, setFoundCHAR] = useState(CHAR);
  
  /*useEffect(() => {
    fetch("https://localhost:7127/api/company")
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
    localStorage.setItem("endDate", document.getElementById("end-date").value);*/

    //const handleFilter
    const filter = (e) => {
      const keyword = e.target.value;
  
      if (keyword !== '') {
        const results = CHAR.filter((item) => {
          return item.provider.toLowerCase().includes(keyword.toLowerCase()) ||
                 item.title.toLowerCase().includes(keyword.toLowerCase()) ||
                 item.location.toLowerCase().includes(keyword.toLowerCase()) ||
                 item.positions.toLowerCase().includes(keyword.toLowerCase());
        });
        setFoundCHAR(results);
      } else {
        setFoundCHAR(CHAR);
      }
      setName(keyword);
  };

  return (
    <div>  
      <div>
        <hr className="hr-style"/>
      </div>
      <input type="search"
        id="keywords"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Search for a company name, a location, or a number of internship positions."
      />
      <div><h4>From</h4>
      <input id="start-date" type="date" required /></div>
      <div><h4>To</h4>
      <input id="end-date" type="date" required /></div>
      <div>
        <hr className="hr-style"/>
      </div>
      <div><button className="btn btn-gray-blue">Search</button></div>
      <div>
        <hr className="hr-style"/>
      </div>
      <div>
        {foundCHAR && foundCHAR.length > 0 ? (
          foundCHAR.map((item) => (
            <table>
            <thead>
              <tr className="tr-font">            
              <th scope="col">Internship Provider</th>
              <th scope="col">Job Title</th>
              <th scope="col">Location</th>
              <th scope="col">Positions</th>            
            </tr>
            </thead>
            <tbody>
            <tr>            
              <th scope="row">{item.provider}</th>
              <th scope="row">{item.title}</th>
              <th scope="row">{item.location}</th>
              <th scope="row">{item.positions}</th>
            </tr>
            </tbody>
            </table>
          ))
        ) : (
          <h3>No results found!</h3>
        )}
      </div>
    </div>
  );
}

export default SearchBar;