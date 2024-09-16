import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import SearchBar from './components/searchbar/SearchBar';

function App() {
    const [internships, setInternships] = useState();

    useEffect(() => {
        loadInternshipData();
    }, []);

    const contents = internships === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                    <th>Provider</th>
                    <th>Location</th>
                    <th>Number of positions</th>                    
                </tr>
            </thead>
            <tbody>
                {internships.map(internship =>
                    <tr key={internship.provider}>
                        <td>{internship.provider}</td>
                        <td>{internship.location}</td>
                        <td>{internship.position}</td>                        
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>            
            <h1 id="tableLabel">Looking for an internship?</h1>
            <p>Connect with our internship providers through our online service!</p>
            {contents}
            
            <SearchBar />           
        </div>
    );
    
    async function loadInternshipData() {
        const response = await fetch('./data/internships.json');
        const data = await response.json();
        setInternships(data);
    }
}

export default App;