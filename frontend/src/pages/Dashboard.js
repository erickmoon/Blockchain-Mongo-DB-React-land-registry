// src/pages/Dashboard.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    window.location.href = '/login'; // Redirect to login page after logout
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? (
        <div>
          <p>Welcome, {user.name || 'User'}!</p>
          <button onClick={handleLogout}>Logout</button>
          <div>
            <h2>Land Management</h2>
            <Link to="/register-land">Register New Land</Link>
            <br />
            <Link to="/all-lands">View All Lands</Link>
          </div>
        </div>
      ) : (
        <p>Please log in to access the dashboard.</p>
      )}
    </div>
  );
};

export default Dashboard;
