const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require("../compile");

let accounts;
let inbox;

/**
 * Get a list of all accounts
 * Use one of the accounts to deploy the contract
 */
beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ["Hi"] })
        .send({ from: accounts[0], gas: "1000000" })
})

describe("Inbox", () => {
    it("Deploys Contract", () => {
        console.log(inbox);
    });
})