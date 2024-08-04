const { ethers } = require("hardhat");
async function main() {
    const [deployer] = await ethers.getSigners();
    const tokenContractFactory = await ethers.getContractFactory("SimpleDeFiToken");
    const token = await tokenContractFactory.deploy();
    console.log("Simple DeFi Token Contract Address: ",token.address);
    console.log("Deployer: ", deployer.address);
    console.log("Deployer ETH balance: ",(await deployer.getBalance()).toString());
}
