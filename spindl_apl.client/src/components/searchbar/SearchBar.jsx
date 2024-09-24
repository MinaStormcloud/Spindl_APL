import { useState } from "react";
import "./SearchBar.css";
import "../../css/Buttons.css";
import data from './internships.json'; // Kontrollera sökvägen till JSON-filen
 
function SearchBar({ onSearch }) {
  const CHAR = data;
  const [provider, setProvider] = useState('');
  const [location, setLocation] = useState('');
  const [positions, setPositions] = useState('');
  const [foundCHAR, setFoundCHAR] = useState(CHAR);

  // Filtreringslogik
  const filter = () => {
    const filteredResults = CHAR.filter((item) => {
      return (
        (provider === '' || item.provider.toLowerCase().includes(provider.toLowerCase())) &&
        (location === '' || item.location.toLowerCase().includes(location.toLowerCase())) &&
        (positions === '' || item.positions.toLowerCase().includes(positions.toLowerCase()))
      );
    });
    setFoundCHAR(filteredResults);
    onSearch({ provider, location, positions }); // Skicka de valda sökparametrarna till Home-komponenten
  };

  return (
    <div>
      <div>
        <hr className="hr-style" />
      </div>
      {/* Sökfält för företag */}
      <input
        type="search"
        value={provider}
        onChange={(e) => setProvider(e.target.value)}
        className="input"
        placeholder="Search for a company"
      />
      {/* Sökfält för plats */}
      <input
        type="search"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="input"
        placeholder="Search for a location"
      />
      {/* Sökfält för antal positioner */}
      <input
        type="search"
        value={positions}
        onChange={(e) => setPositions(e.target.value)}
        className="input"
        placeholder="Search by number of positions"
      />
      <div>
        <button className="btn btn-gray-blue" onClick={filter}>Search</button>
      </div>
      <div>
        <hr className="hr-style" />
      </div>
      {/* Resultatlista */}
      <div>
        {foundCHAR && foundCHAR.length > 0 ? (
          foundCHAR.map((item, index) => (
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
    </div>
  );
}

export default SearchBar;
