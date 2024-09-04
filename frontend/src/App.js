// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Register from './components/User/Register';
import Login from './components/User/Login';
import RegisterLand from './components/Land/RegisterLand';
import AllLands from './components/Land/AllLands';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
