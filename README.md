![Licence](https://img.shields.io/badge/Licence-Perso%20libre%20%7C%20Pro%20payante-orange)

# 📊 CKILFO Premium Dashboard (ckf-dashboard)

Bienvenue dans le tableau de bord premium CKILFO 🚀

Ce projet est un dashboard React interactif connecté à un **smart contract BSC Testnet** permettant aux utilisateurs d'accéder à des fonctionnalités avancées via un paiement en token **CKF**.

![Licence](https://img.shields.io/badge/Licence-Perso%20libre%20%7C%20Pro%20payante-orange)

---

## 🔐 Module Premium CKF

Le dashboard intègre un module premium basé sur un contrat intelligent déployé sur Binance Smart Chain (testnet) :

- 💰 Paiement unique de **100 CKF** via MetaMask
- 🔁 Redirection automatique vers `/premium` après paiement
- ✅ Vérification **on-chain** du statut via `isPremium(address)`
- 🏅 Badge dynamique pour les membres premium

### 📍 Contrat déployé
- [0x43988e9f76AB3Ce8eB09cF1F72e567CFF93AdA46 (Proxy)](https://testnet.bscscan.com/address/0x43988e9f76AB3Ce8eB09cF1F72e567CFF93AdA46)

Fonction utilisée :
```solidity
function payForPremium() external
```

📂 Fichier clé : `src/components/DashboardPremium.jsx`

---

## 🛠 Fonctionnalités principales

- Connexion Web3 via MetaMask 🔐
- Vérification du solde en CKF 💰
- Paiement avec `payForPremium()`
- Redirection conditionnelle 🧭
- Badge dynamique 🏅

---

## 🧑‍💻 Stack technique

- React 18
- Ethers.js
- Hardhat + OpenZeppelin Upgrades
- TailwindCSS
- Solidity 0.8.20 (contrats proxy upgradeables)

---

## 🔗 Dépendances

```
npm install ethers hardhat @openzeppelin/hardhat-upgrades @nomicfoundation/hardhat-toolbox react-router-dom
```

---

## 🚀 Lancer le projet

```
git clone https://github.com/CKILFO/ckf-dashboard.git
cd ckf-dashboard
npm install
npm run dev
```

---

## 📄 Licence

Ce projet est distribué sous **double licence** :

- 🔓 **Usage personnel, éducatif ou non-commercial** → autorisé sous [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/deed.fr)
- 🔒 **Usage commercial ou professionnel** → nécessite une **licence payante**

👉 Pour toute utilisation commerciale, intégration dans un service ou produit, contactez-moi à **ckilmefo@gmail.com**

---

## 🔗 Autres dépôts CKILFO

- [ckilfo-dashboard (version statique/HTML)](https://github.com/CKILFO/ckilfo-dashboard)
- [ckf-dashboard (React premium version)](https://github.com/CKILFO/ckf-dashboard)

---

## ✨ Auteur

👤 CKILFO  
📧 ckilmefo@gmail.com  
🌐 [github.com/CKILFO](https://github.com/CKILFO)

---

## ⭐️ Laisse un star si tu aimes le projet !

