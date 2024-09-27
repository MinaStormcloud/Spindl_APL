import { useState, useEffect } from "react";
import "./SearchBar.css";
import "../../css/Buttons.css";
import data from './internships.json';

//Get data from API
/*
const [data, setData] = React.useState(null);
const fetchedData ="https://localhost:7127/api/company/search";

  React.useEffect(() => {
    fetch(fetchedData)
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div >
      <p>{!data ? "Loading..." : data}</p>
      (<Table data = {data}/>)
    </div>
  );
} */

//Display local json data
function SearchBar({ onSearch }) {
  const CHAR = data;
  const [provider, setProvider] = useState('');
  const [location, setLocation] = useState('');
  const [positions, setPositions] = useState('');
  const [foundCHAR, setFoundCHAR] = useState(CHAR);
 
  // Filtering logic for multiple search fields
  const filter = () => {
    const filteredResults = CHAR.filter((item) => {
      return (
        (provider === '' || item.provider.toLowerCase().includes(provider.toLowerCase())) &&
        (location === '' || item.location.toLowerCase().includes(location.toLowerCase())) &&
        (positions === '' || item.positions.toLowerCase().includes(positions.toLowerCase()))
      );
    });
    setFoundCHAR(filteredResults);
    onSearch({ provider, location, positions }); 
  };
 
  return (
    <div>
      <div>
        <hr className="hr-style"/>
      </div>
 
      {/* Company */}
      <input
        type="search"
		id="keywords"
        value={provider}
        onChange={(e) => setProvider(e.target.value)}
        className="input"
        placeholder="Search for a company"
      />
 
      {/* Location */}
      <input
        type="search"
		id="keywords"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="input"
        placeholder="Search for a location"
      />
 
      {/* Positions */}
      <input
        type="search"
		id="keywords"
        value={positions}
        onChange={(e) => setPositions(e.target.value)}
        className="input"
        placeholder="Search by number of positions"
      />
 
      <div>
        <button className="btn btn-gray-blue" onClick={filter}>Search</button>
      </div>
      <div>
        <hr className="hr-style"/>
      </div>
 
      {/* Display results */}
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