import Web3 from "web3";
import Wallet from "./contracts/Wallet.json";
//not from build dir? check later

const getWeb3 = () => {
  return new Web3("http://localhost:9545");
};

const getWallet = async () => {
  const networkId = await web3.eth.net.getId();
  const contractDeployment = Wallet.networks[networkId];
  return new web3.eth.Contract(
    Wallet.abi,
    contractDeployment && contractDeployment.address
  );
};

export { getWeb3, getWallet };
