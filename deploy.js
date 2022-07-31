const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
require('dotenv').config()

const { interface, bytecode } = require("./compile");
const { WALLET_MNM, WALLET_PROVIDER_URL } = process.env;
const provider = new HDWalletProvider(WALLET_MNM, WALLET_PROVIDER_URL);

const web3 = new Web3(provider);