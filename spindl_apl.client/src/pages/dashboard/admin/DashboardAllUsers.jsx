import React, { useState, useEffect } from "react";
import UserData from '../../../dashboard-components/userdata/UserData';
import SideMenu from '../../../dashboard-components/sidemenu/SideMenu';
import '../../../dashboard-components/dashboard-css/Dashboard.css';

export default function DashboardAllUsers() {
  const [users, setApplicationUsers] = useState([]);  
  const [showInputForm, setShowInputForm] = useState(false);
  const [editApplicationUserData, setEditApplicationUserData] = useState(null); 

  useEffect(() => {
    fetchApplicationUsers();    
  }, []);

  const fetchApplicationUsers = () => {
    fetch("https://localhost:7127/api/ApplicationUsers")
      .then((response) => response.json())
      .then((data) => setApplicationUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  };  

  const handleApplicationUserAdded = (newApplicationUser) => {
    fetchApplicationUsers();
    setShowInputForm(false);
  };

  const handleApplicationUserUpdated = (updatedApplicationUser) => {
    fetchApplicationUsers();
    setShowInputForm(false);
    setEditApplicationUserData(null);
  };

  const handleEdit = (user) => {
    setEditApplicationUserData(user);
    setShowInputForm(true);
  };

  const handleCancelForm = () => {
    setShowInputForm(false);
    setEditApplicationUserData(null);
  };  

  return (
    <div className="dashboard-container">
      <SideMenu />
        <div className="dashboard">      
        <div className="dashboard-header">
          <h2>Users</h2>
          <button className="btn btn-gray-blue-responsive" onClick={() => setShowInputForm(true)}>
            Add User
          </button>
        </div>

        {showInputForm && (
          <UserData
            onApplicationUserAdded={handleApplicationUserAdded}
            onApplicationUserUpdated={handleApplicationUserUpdated}
            onCancel={handleCancelForm}         
            editApplicationUserData={editApplicationUserData}
            fetchApplicationUsers={fetchApplicationUsers} // Pass fetchApplicationUsers as a prop
          />
        )}

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>             
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.userId}>
                <td>{user.userName}</td>
                <td>{user.userEmail}</td>
                <td>{user.userPhone}</td>                 
                <td>
                  <button
                    className="btn-overview btn-blue"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn-overview btn-red"
                    onClick={() => {
                      if (
                        window.confirm(
                          `Are you sure you want to delete user with ID ${user.userId}?`
                        )
                      ) {
                        fetch(
                          `https://localhost:7127/api/ApplicationUsers/${user.userId}`,
                          {
                            method: "DELETE",
                          }
                        )
                          .then((response) => {
                            if (response.ok) {
                              const updatedApplicationUsers = users.filter(
                                (b) => b.userId !== user.userId
                              );
                              setApplicationUsers(updatedApplicationUsers);
                            } else {
                              throw new Error("Failed to delete user");
                            }
                          })
                          .catch((error) =>
                            console.error("Error deleting user:", error)
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