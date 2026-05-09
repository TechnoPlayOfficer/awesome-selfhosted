require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

const { PRIVATE_KEY, BASE_RPC_URL } = process.env;

module.exports = {
  solidity: "0.8.20",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    baseTestnet: {
      url: BASE_RPC_URL || "https://sepolia.base.org",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : []
    }
  }
};
