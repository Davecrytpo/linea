require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomicfoundation/hardhat-verify");

const { PRIVATE_KEY, LINEASCAN_API_KEY } = process.env;

module.exports = {
  solidity: "0.8.24",
  networks: {
    linea_mainnet: {
      url: `https://mainnet.linea.build/`, // Correct URL
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      linea_mainnet: LINEASCAN_API_KEY,
    },
    customChains: [
      {
        network: "linea_mainnet",
        chainId: 59144,
        urls: {
          apiURL: "https://api.lineascan.build/api",
          browserURL: "https://lineascan.build/",
        },
      },
    ],
  },
  sourcify: {
    enabled: true,
  },
};
