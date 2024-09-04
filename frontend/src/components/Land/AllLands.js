// src/components/Land/AllLands.js
import React from 'react';

const AllLands = ({ lands }) => {
    return (
        <div>
            <h2>All Lands</h2>
            <ul>
                {lands.map((land) => (
                    <li key={land.id}>
                        ID: {land.id}, Location: {land.location}, Owner: {land.owner}, Active: {land.isActive ? 'Yes' : 'No'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllLands;
