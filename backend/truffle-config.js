const path = require("path");

module.exports = {
  // Specify the path where the compiled contracts will be saved
  contracts_build_directory: path.join(__dirname, "build/contracts"),

  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,  // Ensure this matches your Ganache configuration
      network_id: "*", // Match any network id
    },
    // Add other network configurations if needed
  },

  compilers: {
    solc: {
      version: "0.8.0", // Specify the Solidity version you're using
    },
  },
};
