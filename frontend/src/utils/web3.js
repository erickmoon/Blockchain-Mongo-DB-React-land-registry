import Web3 from 'web3';

let web3;

if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    // Request user accounts
    window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(accounts => {
            console.log('Connected accounts:', accounts);
        })
        .catch(err => {
            console.error('Failed to connect accounts:', err);
            alert('Failed to connect to MetaMask. Please allow access.');
        });
} else {
    alert('Please install MetaMask or another Ethereum wallet.');
}

export default web3;
