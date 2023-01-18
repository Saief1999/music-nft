require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  // for (const account of accounts) {
  //   console.log(account.address);
  // }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    // mumbai: {
    //   url: `https://polygon-mumbai.g.alchemy.com/v2/nAhiCHKvZkhkp4A7PkkCIBON0-BXW26d`,
    //   //accounts: [process.env.privateKey]
    // },
    // matic: {
    //   url: "https://polygon-mainnet.g.alchemy.com/v2/nAhiCHKvZkhkp4A7PkkCIBON0-BXW26d",
    //   //accounts: [process.env.privateKey]
    // },
    goerli: {
      url: process.env.REACT_APP_ALCHEMY_API_URL,
      accounts: ["b65df1e314dce0d6042b770905f4dcd46da3d0549ef00498d86cc09fbe2ab0df",
      "ca04faccb1a4811e10bc4fc46950fe5c9a4ab6df28e3b7f330e65ad52c462bbe",
      "0aa0064422f16710379cab2a990ad2cc60d8f1626f5c4b40e4fa7e1e26ac950a"
    ]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};