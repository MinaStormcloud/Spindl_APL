import { useState, useEffect } from "react";
import "./SearchBar.css";

function SearchBar() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    
    <form onSubmit={handleChange}>      
      <input 
        type="text" 
        id="keywords"
        onkeyup="SearchBar()"
        placeholder="Search for internship providers.."
        onChange={(e) => setName(e.target.value)}
        
      />
      <ul id="listItems">
        <li><a href="#">Company A</a></li>
        <li><a href="#">Company B</a></li>

        <li><a href="#">Company C</a></li>
        <li><a href="#">Company D</a></li>

        <li><a href="#">Company E</a></li>
        <li><a href="#">Company F</a></li>
        <li><a href="#">Company G</a></li>
      </ul>      
    </form>    
  );
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('keywords');
  filter = input.value.toUpperCase();
  ul = document.getElementById("listItems");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

export default SearchBar;
