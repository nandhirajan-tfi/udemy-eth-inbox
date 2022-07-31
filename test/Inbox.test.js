const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const web3 = new Web3(ganache.provider());

let accounts;
/**
 * Get a list of all accounts
 * Use one of the accounts to deploy the contract
 */
beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
})

describe("Inbox", () => {
    it("Deploys Contract", () => {
        console.log(accounts);
    });
})