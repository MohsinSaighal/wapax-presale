const { ethers, upgrades } = require("hardhat");

async function main() {
  const WapaxPreSale = await ethers.getContractFactory(
    "WAPAXPreSale"
  );
  console.log("Deploying WAPAXPreSale...");
  const presale = await WapaxPreSale.deploy("13610000000000","1693353600","1701345540","0x2D299c19682Ff7762f8044d46dC5884ae918B9F5","0x53e92bDE27b898E7D4D748458BB74Db6d63D2027");
  console.log("WAPAXToken deployed to:", presale.address);
}

main();