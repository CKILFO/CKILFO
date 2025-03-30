const tokenAddress = "0x43988e9f76AB3Ce8eB09cF1F72e567CFF93AdA46";
const abi = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)"
];

document.getElementById("tokenAddress").textContent = tokenAddress;

document.getElementById("connectBtn").addEventListener("click", async () => {
  if (typeof window.ethereum === "undefined") {
    alert("Metamask non détecté !");
    return;
  }

  await ethereum.request({ method: "eth_requestAccounts" });

  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  const contract = new ethers.Contract(tokenAddress, abi, provider);

  try {
    const [name, symbol, supply] = await Promise.all([
      contract.name(),
      contract.symbol(),
      contract.totalSupply()
    ]);

    document.getElementById("name").textContent = name;
    document.getElementById("symbol").textContent = symbol;
    document.getElementById("supply").textContent = ethers.utils.formatUnits(supply, 18);
  } catch (e) {
    alert("Erreur de lecture du contrat !");
    console.error(e);
  }
});