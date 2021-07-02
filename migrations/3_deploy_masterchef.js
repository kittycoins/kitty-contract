const MeowToken = artifacts.require("MeowToken");
const KittyCoin = artifacts.require("KittyCoin");
const MasterChef = artifacts.require("MasterChef");

module.exports = async function(deployer,network,accounts) {
    // //Deploy KittyCoin
    // await deployer.deploy(KittyCoin);
    // const kitty = await KittyCoin.deployed();

    //Deploy MeowToken
    // await deployer.deploy(MeowToken);
    const mtoken = await MeowToken.deployed();

    let block = await web3.eth.getBlock("latest");

    //Deploy KittyCoin
    await deployer.deploy(MasterChef,mtoken.address, accounts[1], accounts[2], 8500000000, block.number);
    const masterChef = await MasterChef.deployed();

    //Transfer all tokens to Token Farm (1 million)
    await mtoken.transfer(masterChef.address,'100000000000000000');

    //Transfer 100 Mock kittycoins to investor
    // await kitty.transfer(accounts[1],'100000000');
};
