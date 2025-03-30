const { upgrades } = require("hardhat");

async function main() {
  const proxyAddress = "0xABEa3d1c6BE1692d6559a59Ff3d9C4A17C012EfD";
  const implAddress = await upgrades.erc1967.getImplementationAddress(proxyAddress);
  console.log("Adresse de l'implémentation CKILFO :", implAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
