const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  const Registry = await hre.ethers.getContractFactory("ComplianceRegistry");
  const registry = await Registry.deploy();
  await registry.deployed();
  console.log("ComplianceRegistry deployed to:", registry.address);

  const SBT = await hre.ethers.getContractFactory("AccetSBT");
  const sbt = await SBT.deploy(registry.address);
  await sbt.deployed();
  console.log("AccetSBT deployed to:", sbt.address);

  // Example: mark deployer as verified and mint
  const tx = await registry.setVerified(deployer.address, true);
  await tx.wait();
  console.log("Deployer marked as verified");

  const metadataURI = "ipfs://bafkrei...example-metadata";
  const mintTx = await sbt.mintTo(deployer.address, metadataURI);
  await mintTx.wait();
  console.log("Minted SBT to deployer");

  console.log("Done.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});