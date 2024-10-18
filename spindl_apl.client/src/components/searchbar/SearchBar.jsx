import { useState } from 'react';
import './SearchBar.css';
import '../../css/Buttons.css';

function SearchBar({ onSearch }) {
  const [companies, setCompanies] = useState([]);
  const [location, setLocation] = useState('');
  const [positions, setPositions] = useState('');
  const [jobTitle, setJobTitles] = useState('');

  // Sets all properties that should be seached for
  const getSearchTerms = () => {
    let terms = {};
    if (location) {
      terms.location = location;
    }
    if (positions) {
      terms.numberOfStudents = Number(positions);
    }
    if (positions) {
      terms.jobTitle = jobTitle;
    }
    return terms;
  };

  // Search
  const getCompanies = async () => {
    await fetch('https://localhost:7127/api/company/search', {
      method: 'POST',
      body: JSON.stringify(getSearchTerms()),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.status ? setCompanies([]) : setCompanies(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="search-section">
      <div>
        <hr className="hr-style" />
      </div>
      {/* Company search bar */}
      {/*<input
        type="search"
        id="keywords"
        value={companies}
        onChange={(e) => setCompanies(e.target.value)}
        className="input"
        placeholder="Search for a company"
      /> */}
      {/* Category search bar */}
      {
        <input
          type="search"
          id="keywords"
          value={jobTitle}
          onChange={(e) => setJobTitles(e.target.value)}
          className="input"
          placeholder="Search for a job title"
        />
      }
      {/* Location search bar */}
      <input
        type="search"
        id="keywords"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="input"
        placeholder="Search for a location"
      />
      {/* Number of positions */}
      <input
        type="search"
        id="keywords"
        value={positions}
        onChange={(e) => setPositions(e.target.value)}
        className="input"
        placeholder="Search by number of positions"
      />
      <div>
        <button className="btn btn-gray-blue" onClick={getCompanies}>
          Search
        </button>
      </div>
      <div>
        <hr className="hr-style" />
      </div>
      {/* List of results */}
      <div className="table-container">
        <table>
          <thead>
            <tr className="tr-font">
              <th className="centered" scope="col">
                Internship Provider
              </th>
              <th className="centered" scope="col">
                Title
              </th>
              <th className="centered" scope="col">
                Location
              </th>
              <th className="centered" scope="col">
                Positions
              </th>
            </tr>
          </thead>
          {companies.length > 0 ? (
            companies.map((company, key) => (
              <tbody key={key}>
                {company.internships.map((intern, key) => (
                  <tr key={key}>
                    <th>{company.name}</th>
                    {/*<th>{company.jobTitle}</th>*/}
                    <td>{company.location}</td>
                    <td>{intern.numberOfStudents}</td>
                  </tr>
                ))}
              </tbody>
            ))
          ) : (
            <tbody>
              <tr>
                {/*<th>No search results!</th>*/}
                <td></td>
                <td></td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default SearchBar;
