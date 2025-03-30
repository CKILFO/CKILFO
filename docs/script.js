const tokenAddress = "0x43988e9f76AB3Ce8eB09cF1F72e567CFF93AdA46";
const abi = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint256)",
  "function transfer(address to, uint amount) returns (bool)"
];

document.getElementById("tokenAddress").textContent = tokenAddress;

document.getElementById("connectBtn").addEventListener("click", async () => {
  if (typeof window.ethereum === "undefined") {
    alert("Metamask non détecté !");
    return;
  }

  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const userAddress = accounts[0];

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(tokenAddress, abi, signer);

  try {
    const [name, symbol, supply, balance] = await Promise.all([
      contract.name(),
      contract.symbol(),
      contract.totalSupply(),
      contract.balanceOf(userAddress)
    ]);

    document.getElementById("name").textContent = name;
    document.getElementById("symbol").textContent = symbol;
    document.getElementById("supply").textContent = ethers.utils.formatUnits(supply, 18);

    document.getElementById("walletAddress").textContent = userAddress;
    document.getElementById("walletBalance").textContent = ethers.utils.formatUnits(balance, 18);
    document.getElementById("walletSection").style.display = "block";

    document.getElementById("sendBtn").onclick = async () => {
      const to = document.getElementById("toAddress").value;
      const amount = document.getElementById("amount").value;

      if (!to || !amount) {
        alert("Veuillez remplir tous les champs.");
        return;
      }

      try {
        const tx = await contract.transfer(to, ethers.utils.parseUnits(amount, 18));
        document.getElementById("txStatus").textContent = "Transaction envoyée... Attente de validation...";
        await tx.wait();
        document.getElementById("txStatus").textContent = "✅ Transaction validée !";
      } catch (error) {
        console.error(error);
        document.getElementById("txStatus").textContent = "❌ Erreur lors de l'envoi.";
      }
    };

  } catch (e) {
    alert("Erreur de lecture du contrat !");
    console.error(e);
  }
});