async function checkNetwork() {
  const chainId = await ethereum.request({ method: 'eth_chainId' });
  if (chainId !== '0x61' && chainId !== 97) {
    alert("🛑 Change de réseau : sélectionne BSC Testnet dans MetaMask.");
  } else {
    console.log("✅ Réseau OK : BSC Testnet");
  }
}

async function getCKFBalance(address) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contractAddress = '0x43988e9f76AB3Ce8eB09cF1F72e567CFF93AdA46';
  const abi = [
    "function balanceOf(address owner) view returns (uint256)",
    "function decimals() view returns (uint8)"
  ];

  const ckfContract = new ethers.Contract(contractAddress, abi, provider);
  try {
    const [rawBalance, decimals] = await Promise.all([
      ckfContract.balanceOf(address),
      ckfContract.decimals()
    ]);
    const formatted = ethers.utils.formatUnits(rawBalance, decimals);
    document.getElementById("ckfBalance").innerText = `${formatted} CKF`;
  } catch (error) {
    console.error("Erreur lecture balance CKF :", error);
    document.getElementById("ckfBalance").innerText = "Erreur";
  }
}

async function transferCKF() {
  const recipient = "0x782bb7d8c3b4e69030c959ed095cfba225ea7438";
  const contractAddress = "0x43988e9f76AB3Ce8eB09cF1F72e567CFF93AdA46";
  const abi = [
    "function transfer(address to, uint256 amount) returns (bool)",
    "function decimals() view returns (uint8)"
  ];

  if (!window.ethereum) {
    alert("🦊 Installe MetaMask !");
    return;
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);

  try {
    const decimals = await contract.decimals();
    const amount = ethers.utils.parseUnits("1", decimals);

    const tx = await contract.transfer(recipient, amount);
    await tx.wait();

    alert("✅ 1 CKF envoyé avec succès !");
    const address = await signer.getAddress();
    getCKFBalance(address);
  } catch (error) {
    console.error("Erreur de transfert :", error);
    alert("❌ Erreur lors du transfert.");
  }
}

document.getElementById("connectBtn").addEventListener("click", async () => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const address = accounts[0];
      console.log("✅ Connecté :", address);
      document.getElementById("walletAddress").innerText = address;
      await checkNetwork();
      await getCKFBalance(address);
    } catch (error) {
      console.error("❌ Connexion refusée :", error);
    }
  } else {
    alert("🦊 Installe MetaMask !");
  }
});

document.getElementById("sendBtn").addEventListener("click", transferCKF);
