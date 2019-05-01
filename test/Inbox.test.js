const assert = require('assert'); //絶対にコードのこの場所ではこの値が入ってくる、という意志を表明するための仕組み.NodeJs標準
const ganache = require('ganache-cli'); //Ganache とは、Ethereum のローカル開発環境
const Web3 = require('web3'); //Web3がweb3じゃ無い理由があるらしいが、よく分からん
const web3 = new Web3(ganache.provider()); // こっちは小文字
const { interface, bytecode } = require('../compile');


let accounts;
let inbox;

beforeEach(async () => {
  // Get a list of all acounts
  accounts = await web3.eth.getAccounts(); //awaitはasyncの中で存在、結果が出るまで停止する
  // use one of those accounts to deploy
  // the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there'] })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    console.log(inbox);
  });
});


