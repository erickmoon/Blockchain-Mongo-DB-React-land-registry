// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import RegisterLand from '../components/Land/RegisterLand';
import TransferLand from '../components/Land/TransferLand';
import AllLands from '../components/Land/AllLands';
import { getAllLands } from '../api'; // Import the getAllLands function

const Home = () => {
    const [account, setAccount] = useState('');
    const [lands, setLands] = useState([]);
    const [location, setLocation] = useState('');

    const handleConnectWallet = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0]);
            } catch (error) {
                console.error("User denied account access or error occurred:", error);
                alert('Failed to connect wallet. Please ensure MetaMask is installed and try again.');
            }
        } else {
            alert('MetaMask is not installed. Please install MetaMask and try again.');
        }
    };

    const handleDisconnectWallet = () => {
        setAccount(''); // Clear the account state to simulate wallet disconnection
        alert('Wallet disconnected.');
    };

    const fetchLands = async () => {
        try {
            const response = await getAllLands();
            const transformedLands = response.data.map((landArray) => ({
                id: landArray[0],
                owner: landArray[1],
                location: landArray[2],
                isActive: landArray[3]
            }));
            setLands(transformedLands);
        } catch (error) {
            console.error('Failed to fetch lands', error);
        }
    };

    useEffect(() => {
        if (account) {
            fetchLands(); // Fetch lands when the account is connected
        }
    }, [account]);

    const handleLandChange = () => {
        fetchLands(); // Refresh lands after registration or transfer
    };

    return (
        <div>
            <h1>Land Management</h1>
            {account ? (
                <div>
                    <p>Connected Account: {account}</p>
                    <button onClick={handleDisconnectWallet}>Disconnect Wallet</button>
                </div>
            ) : (
                <button onClick={handleConnectWallet}>Connect Wallet</button>
            )}
            <RegisterLand
                account={account}
                location={location}
                setLocation={setLocation}
                onLandChange={handleLandChange} // Pass the handler to refresh lands
            />
            <TransferLand
                account={account}
                onLandChange={handleLandChange} // Pass the handler to refresh lands
            />
            <AllLands lands={lands} /> {/* Pass the lands as a prop */}
        </div>
    );
};

export default Home;
