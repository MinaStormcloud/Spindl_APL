import React, { useState, useEffect } from "react";
import EmployerDetails from '../../../dashboard-components/employerdetails/EmployerDetails';
import EmployerSideMenu from '../../../dashboard-components/sidemenu/EmployerSideMenu';
/*This page needs to be customized to fetch all companies 
matching the user ID of the user that just logged in*/

export default function DashboardEmployerDetails() {
    const [company, setCompany] = useState([]);  
    const [showInputForm, setShowInputForm] = useState(false);
    const [editCompanyData, setEditCompanyData] = useState(null);
  
    useEffect(() => {
      fetchCompanies();    
    }, []);
  
    const fetchCompanies = () => {
      fetch("https://localhost:7127/api/company")
        .then((response) => response.json())
        .then((data) => setCompany(data))
        .catch((error) => console.error("Error fetching companies:", error));
    };  
  
    const handleCompanyAdded = (newCompany) => {
      fetchCompanies();
      setShowInputForm(false);
    };
  
    const handleCompanyUpdated = (updatedCompany) => {
      fetchCompanies();
      setShowInputForm(false);
      setEditCompanyData(null);
    };
  
    const handleEdit = (company) => {
      setEditCompanyData(company);
      setShowInputForm(true);
    };
  
    const handleCancelForm = () => {
      setShowInputForm(false);
      setEditCompanyData(null);
    };    
  
    return (
      <div className="dashboard-container">
        <EmployerSideMenu />
          <div className="dashboard">      
          <div className="dashboard-header">
            <h2>Company Profile</h2>
            <button className="btn btn-gray-blue-responsive" onClick={() => setShowInputForm(true)}>
              Update Company Profile
            </button>
          </div>
  
          {showInputForm && (
            <EmployerDetails
              onCompanyAdded={handleCompanyAdded}
              onCompanyUpdated={handleCompanyUpdated}
              onCancel={handleCancelForm}         
              editCompanyData={editCompanyData}
              fetchCompanies={fetchCompanies} // Pass fetchCompanies as a prop
            />
          )}
  
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Contact</th>                 
              </tr>
            </thead>
            <tbody>
              {company.map((company) => (
                <tr key={company.companyId}>
                  <td>{company.name}</td>
                  <td>{company.location}</td>
                  <td>{company.contact}</td>                   
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>    
    );
  }