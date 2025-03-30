const { ethers, upgrades } = require("hardhat");
const fs = require("fs");

async function main() {
  const CKILFO = await ethers.getContractFactory("CKILFO");
  const ckf = await upgrades.deployProxy(CKILFO, [], {
    initializer: "initialize",
  });

  await ckf.waitForDeployment();

  const address = await ckf.getAddress();
  console.log("✅ CKILFO déployé à :", address);

  // ✅ Créer le dossier s'il n'existe pas
  if (!fs.existsSync("./deployed")) {
    fs.mkdirSync("./deployed");
  }

  // ✅ Sauvegarde l'adresse dans un fichier JSON
  fs.writeFileSync(
    "./deployed/CKF-address.json",
    JSON.stringify({ address }, null, 2)
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
