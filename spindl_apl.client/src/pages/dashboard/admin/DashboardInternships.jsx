import React, { useState, useEffect } from "react";
import Internships from '../../../dashboard-components/internshipdata/Internships';
import SideMenu from '../../../dashboard-components/sidemenu/SideMenu';
import '../../../dashboard-components/dashboard-css/Dashboard.css';

export default function DashboardInternships() {
  const [internships, setInternships] = useState([]);  
  const [showInputForm, setShowInputForm] = useState(false);
  const [editInternshipData, setEditInternshipData] = useState(null);
  
  useEffect(() => {
    fetchInternships();    
  }, []);

  const fetchInternships = () => {
    fetch("https://localhost:7127/api/Internships")
      .then((response) => response.json())
      .then((data) => setInternships(data))
      .catch((error) => console.error("Error fetching internships:", error));
  };  

  const handleInternshipAdded = (newInternship) => {
    fetchInternships();
    setShowInputForm(false);
  };

  const handleInternshipUpdated = (updatedInternship) => {
    fetchInternships();
    setShowInputForm(false);
    setEditInternshipData(null);
  };

  const handleEdit = (internship) => {
    setEditInternshipData(internship);
    setShowInputForm(true);
  };

  const handleCancelForm = () => {
    setShowInputForm(false);
    setEditInternshipData(null);
  };  

  return (
    <div className="dashboard-container">
      <SideMenu />
        <div className="dashboard">      
        <div className="dashboard-header">
          <h2>Internships</h2>
          <button className="btn btn-gray-blue-responsive" onClick={() => setShowInputForm(true)}>
            Add Internship
          </button>
        </div>

        {showInputForm && (
          <Internships
            onInternshipAdded={handleInternshipAdded}
            onInternshipUpdated={handleInternshipUpdated}
            onCancel={handleCancelForm}         
            editInternshipData={editInternshipData}
            fetchInternships={fetchInternships} // Pass fetchInternships as a prop
          />
        )}

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th className="th-optional">Company</th>
              <th className="th-optional">Positions</th>            
              <th>Start Date</th>
              <th>End Date</th>              
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {internships.map((internship) => (
              <tr key={internship.internshipId}>
                <td>{internship.companyId}</td>
                <td>{internship.company}</td>
                <td>{internship.numberOfStudents}</td>              
                <td>{new Date(internship.dateFrom).toLocaleDateString()}</td> 
                <td>{new Date(internship.dateTo).toLocaleDateString()}</td>                
                <td>
                  <button
                    className="btn-overview btn-blue"
                    onClick={() => handleEdit(internship)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn-overview btn-red"
                    onClick={() => {
                      if (
                        window.confirm(
                          `Are you sure you want to delete internship with ID ${internship.internshipId}?`
                        )
                      ) {
                        fetch(
                          `https://localhost:7127/api/Internships/${internship.internshipId}`,
                          {
                            method: "DELETE",
                          }
                        )
                          .then((response) => {
                            if (response.ok) {
                              const updatedInternships = internships.filter(
                                (b) => b.internshipId !== internship.internshipId
                              );
                              setInternships(updatedInternships);
                            } else {
                              throw new Error("Failed to delete internship");
                            }
                          })
                          .catch((error) =>
                            console.error("Error deleting internship:", error)
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
