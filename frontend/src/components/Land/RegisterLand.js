// src/components/Land/RegisterLand.js
import React, { useState } from 'react';
import { registerLand } from '../../api';

const RegisterLand = ({ account, location, setLocation, onLandChange }) => {
  const [formLocation, setFormLocation] = useState(location);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!account) {
      alert('Please connect your wallet.');
      return;
    }

    try {
      await registerLand(formLocation, account);
      alert('Land registered successfully');
      onLandChange(); // Notify the parent component to refresh lands
    } catch (error) {
      alert(error.response?.data?.error || 'Failed to register land');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Location"
        value={formLocation}
        onChange={(e) => setFormLocation(e.target.value)}
      />
      <button type="submit">Register Land</button>
    </form>
  );
};

export default RegisterLand;
