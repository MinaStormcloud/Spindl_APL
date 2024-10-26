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
      fetch("https://localhost:7127/api/Companies")
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
  
    const getStatusColor = (status) => {
      switch (status) {
        case "Confirmed":
          return "var(--green)";
        case "Pending":
          return "var(--orange)";
        case "Cancelled":
          return "var(--red)";
        default:
          return "black"; // default color if status does not match
      }
    };
  
    return (
      <div className="dashboard-container">
        <EmployerSideMenu />
          <div className="dashboard">      
          <div className="dashboard-header">
            <h2>Company Profile</h2>
            <button className="btn btn-gray-blue-responsive" onClick={() => setShowInputForm(true)}>
              Update Contact Info
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
                  <td>
                    <button
                      className="btn-overview btn-blue"
                      onClick={() => handleEdit(company)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn-overview btn-red"
                      onClick={() => {
                        if (
                          window.confirm(
                            `Are you sure you want to delete company with ID ${company.companyId}?`
                          )
                        ) {
                          fetch(
                            `https://localhost:7127/api/Companies/${company.companyId}`,
                            {
                              method: "DELETE",
                            }
                          )
                            .then((response) => {
                              if (response.ok) {
                                const updatedCompany = company.filter(
                                  (b) => b.companyId !== company.companyId
                                );
                                setCompany(updatedCompany);
                              } else {
                                throw new Error("Failed to delete company");
                              }
                            })
                            .catch((error) =>
                              console.error("Error deleting company:", error)
                            );
                        }
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>    
    );
  }