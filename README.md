![Licence MIT](https://img.shields.io/badge/Licence-MIT-blue.svg)

# 📊 CKILFO Premium Dashboard (ckf-dashboard)

Bienvenue dans le tableau de bord premium CKILFO 🚀

Ce projet est un dashboard React interactif connecté à un **smart contract BSC Testnet** permettant aux utilisateurs d'accéder à des fonctionnalités avancées via un paiement en token **CKF**.

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

## 🧠 À propos du projet

CKILFO Premium Dashboard est conçu pour tester et démontrer un système de gestion de privilèges basé sur un token utilitaire.

Il s’intègre dans un écosystème complet autour du token **CKF** et prépare le passage en production avec une version mainnet.

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
