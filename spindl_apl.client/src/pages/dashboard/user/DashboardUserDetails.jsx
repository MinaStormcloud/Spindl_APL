import React, { useState, useEffect } from "react";
import UserDetails from '../../../dashboard-components/userdetails/UserDetails';
import UserSideMenu from '../../../dashboard-components/sidemenu/UserSideMenu';
/*This page needs to be customized to fetch the data
matching the user ID of the user that just logged in*/

export default function DashboardUserDetails() {
    const [users, setUsers] = useState([]);  
    const [showInputForm, setShowInputForm] = useState(false);
    const [editUserData, setEditUserData] = useState(null);
  
    useEffect(() => {
      fetchUsers();    
    }, []);
  
    const fetchUsers = () => {
      fetch("https://localhost:7127/api/ApplicationUsers")
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error("Error fetching users:", error));
    };  
  
    const handleUserAdded = (newUser) => {
      fetchUsers();
      setShowInputForm(false);
    };
  
    const handleUserUpdated = (updatedUser) => {
      fetchUsers();
      setShowInputForm(false);
      setEditUserData(null);
    };
  
    const handleEdit = (user) => {
      setEditUserData(user);
      setShowInputForm(true);
    };
  
    const handleCancelForm = () => {
      setShowInputForm(false);
      setEditUserData(null);
    };    
  
    return (
      <div className="dashboard-container">
        <UserSideMenu />
          <div className="dashboard">      
          <div className="dashboard-header">
            <h2>My Profile</h2>
            <button className="btn btn-gray-blue-responsive" onClick={() => setShowInputForm(true)}>
              Update My Profile
            </button>
          </div>
  
          {showInputForm && (
            <UserDetails
              onUserAdded={handleUserAdded}
              onUserUpdated={handleUserUpdated}
              onCancel={handleCancelForm}         
              editUserData={editUserData}
              fetchUsers={fetchUsers} // Pass fetchUsers as a prop
            />
          )}
  
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>                 
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.userId}>
                  <td>{user.userName}</td>
                  <td>{user.userEmail}</td>
                  <td>{user.userPhone}</td>                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>    
    );
  }
