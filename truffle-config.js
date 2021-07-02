require('babel-register');
require('babel-polyfill');
//require('dotenv').config();

//const mnemonic = process.env.MNEMONIC;

const { projectId, mnemonic } = require('./secrets.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');  // @notice - Should use new module.

module.exports = {
  networks: {
    development: {
    host: '127.0.0.1',
    port: 7545,
    network_id: '*',
    skipDryRun: true,
    gasPrice: 5000000000
   },
   testnet: {
    provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s2.binance.org:8545/`),
    network_id: 97,
    confirmations: 2,
    timeoutBlocks: 300,
    skipDryRun: true
  },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "^0.6.12",
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg"
    }
  }
}
