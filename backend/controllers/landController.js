require('dotenv').config();

const Web3 = require('web3');
const contractABI = require('../build/contracts/LandRegistry.json');

// Retrieve contract address and Ethereum node URL from environment variables
const contractAddress = process.env.CONTRACT_ADDRESS;
const ethNodeUrl = process.env.ETH_NODE_URL;

let web3;
try {
    // Initialize Web3 with the provided Ethereum node URL
    web3 = new Web3(new Web3.providers.HttpProvider(ethNodeUrl));
    console.log('Web3 successfully initialized');
} catch (error) {
    console.error('Failed to initialize Web3:', error.message);
    // Handle the error appropriately, e.g., exit the process or fallback
    process.exit(1); // Exiting the process as an example
}

// Create a contract instance
const landContract = new web3.eth.Contract(contractABI.abi, contractAddress);

exports.registerLand = async (req, res) => {
    const { location, account } = req.body;

    try {
        if (!web3.utils.isAddress(account)) {
            return res.status(400).json({ error: 'Invalid account address' });
        }
        await landContract.methods.registerLand(location).send({
            from: account,
            gas: 3000000 // Increase the gas limit (you can adjust this value)
        });
        res.status(200).json({ msg: 'Land registered successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.transferLand = async (req, res) => {
    const { id, newOwner, account } = req.body;
    try {
        // Validate the provided account (e.g., check if it's a valid Ethereum address)
        if (!web3.utils.isAddress(account)) {
            return res.status(400).json({ error: 'Invalid account address' });
        }
        // Use the provided account for the transaction
        await landContract.methods.transferLand(id, newOwner).send({ from: account });
        res.status(200).json({ msg: 'Land transferred successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllLands = async (req, res) => {
    try {
        const lands = await landContract.methods.getAllLands().call();
        res.status(200).json(lands);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
