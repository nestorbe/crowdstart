import Web3 from 'web3';

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // if we are in browser and Metamask is already installed
  window.ethereum.enable();
  web3 = new Web3(window.web3.currentProvider);
} else {
  // we are on server or user is not running Metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/4d8ae40a41e34eb0a70fba4f161f7fd7"
  );
  web3 = new Web3(provider);
}

export default web3;
