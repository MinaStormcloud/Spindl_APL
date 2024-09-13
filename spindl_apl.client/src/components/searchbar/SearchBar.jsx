import { useState, useEffect } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {  
  const [companies, setCompany] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState("");

  useEffect(() => {
    fetch()
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleChange = (event) => {
    setSelectedCompany(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(selectedCompany);
    localStorage.setItem("company", selectedCompany);
    localStorage.setItem("startDate", document.getElementById("start-date").value);
    localStorage.setItem("endDate", document.getElementById("end-date").value);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      
    </form>
  );
}

export default SearchBar;
