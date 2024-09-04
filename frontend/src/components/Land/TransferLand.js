// src/components/Land/TransferLand.js
import React, { useState } from 'react';
import { transferLand } from '../../api'; // Import the transferLand function

const TransferLand = ({ account, onLandChange }) => {
    const [landId, setLandId] = useState('');
    const [newOwner, setNewOwner] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!account) {
            alert('Please connect your wallet.');
            return;
        }

        try {
            await transferLand(landId, newOwner, account);
            alert('Land transferred successfully');
            onLandChange(); // Notify the parent component to refresh lands
        } catch (error) {
            alert(error.response?.data?.error || 'Failed to transfer land');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Land ID"
                value={landId}
                onChange={(e) => setLandId(e.target.value)}
            />
            <input
                type="text"
                placeholder="New Owner Address"
                value={newOwner}
                onChange={(e) => setNewOwner(e.target.value)}
            />
            <button type="submit">Transfer Land</button>
        </form>
    );
};

export default TransferLand;
