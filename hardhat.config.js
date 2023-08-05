require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

const ALCHEMY_API_KEY = process.env.API_KEY;
const GOERLI_PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    arbitrumOne: {
      url: "https://arb1.arbitrum.io/rpc",
      accounts: [GOERLI_PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: {
      arbitrumOne: 'TXK4PEDJ6IZX9B9NSB9363KX3E822NIQNV'
    }
  },
};
