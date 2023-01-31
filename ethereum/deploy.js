const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");
// const dotenv = require ('dotenv');
// dotenv.config();
const provider = new HDWalletProvider(

// nemonic,
  
  //urm
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

   try {
   await new web3.eth.Contract(compiledFactory.abi)
    .deploy({ data: compiledFactory.evm.bytecode.object })
    .send({ gas: "1000", from: accounts[0] });
  } catch (error) {
    console.log(error)
  }

//   console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();