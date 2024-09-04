// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { loginUser } from '../api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Implement user retrieval based on token if needed
      setUser(true); // Placeholder, replace with actual user data
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await loginUser(email, password);
    localStorage.setItem('token', response.data.token);
    setUser(true); // Placeholder, replace with actual user data
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
