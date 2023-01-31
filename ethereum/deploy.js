const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");
// const dotenv = require ('dotenv');
// dotenv.config();
const provider = new HDWalletProvider(
    "add nemonic",
    'https://goerli.infura.io/v3/d5917935b7b34e73848b357ff50e6410'


);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

   try {
   await new web3.eth.Contract(compiledFactory.abi)
    .deploy({ data: compiledFactory.evm.bytecode.object })
    .send({  from: accounts[0] });
  } catch (error) {
    console.log(error)
  }


  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();

  
