import { useEffect, useState } from 'react';
import './App.css';
import Layout from './Layout';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Subscribe from './pages/subscribe/Subscribe';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import NotFound from './pages/404/NotFound';

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
            <BrowserRouter>    
                <Layout>
                    <Routes>
                        <Route index path="/" element={<Home />} />         
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} /> 
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />                        
                        <Route path="/subscribe" element={<Subscribe />} />
                        <Route path="*" element={<NotFound />} />                            
                    </Routes> 
                </Layout>                     
            </BrowserRouter>                     
        </div>
    );
    
    async function loadInternshipData() {
        const response = await fetch('https://localhost:7127/api');
        const data = await response.json();
        setInternships(data);
    }
}

export default App;