<p align="center">
![GitHub Pages](https://img.shields.io/badge/Dashboard-Live-green)
![Smart Contract Verified](https://img.shields.io/badge/Smart%20Contract-Verified-blue)
![Licence double](https://img.shields.io/badge/Licence-Perso%20libre%20%7C%20Pro%20payante-orange)
[![CC BY-NC 4.0](https://img.shields.io/badge/Licence-CC%20BY--NC%204.0-lightgrey)](https://creativecommons.org/licenses/by-nc/4.0/)

  <img src="https://raw.githubusercontent.com/CKILFO/CKILFO/main/Logo%20CKF%20Last.png" alt="Logo CKILFO" width="200"/>
  <br/>
  <strong>CKILFO – Token utilitaire pour dashboards Web3 premium</strong>
</p>

📊 CKILFO Premium Dashboard – React + Web3 + Token CKF

Bienvenue dans le **dashboard premium CKILFO**, un tableau de bord Web3 connecté à un **smart contract CKF sur BSC Testnet**, permettant l’accès à des fonctionnalités premium via un **paiement on-chain en token CKF**.

🛠️ Idéal pour expérimenter des cas concrets de **paywall décentralisé**, d’authentification Web3 et de contrôle d’accès premium via tokens.

---

## 🪙 Fonctionnalités Premium CKILFO

- 💰 Paiement unique de **100 CKF** via MetaMask
- 🔐 Vérification automatique de l’accès premium via `isPremium(address)`
- 🔁 Redirection intelligente vers `/premium`
- 🏅 Affichage dynamique d’un **badge Premium CKF**

### 🔗 Smart Contract (Testnet BSC)

- Adresse Proxy : [`0x43988e9f76AB3Ce8eB09cF1F72e567CFF93AdA46`](https://testnet.bscscan.com/address/0x43988e9f76AB3Ce8eB09cF1F72e567CFF93AdA46)

```solidity
function payForPremium() external
```

📁 Fichier React concerné : `src/components/DashboardPremium.jsx`

---

## 🧩 Fonctionnalités principales

- 🔑 Connexion MetaMask (Web3)
- 💼 Paiement via token ERC20 `CKF`
- 🧠 Vérification on-chain d’un statut premium
- 🎯 Redirection conditionnelle
- 📊 Visualisation de solde, statut, badge dynamique

---

## ⚙️ Stack technique

- ⚛️ React 18
- 🔗 Ethers.js
- 🧪 Hardhat + OpenZeppelin Upgrades
- 🎨 TailwindCSS
- 💡 Solidity 0.8.20 (contrats proxy)

---

## 📦 Installation & lancement

```bash
git clone https://github.com/CKILFO/ckf-dashboard.git
cd ckf-dashboard
npm install
npm run dev
```

➡️ Accès local : http://localhost:3000

---

## 📚 Dépendances

```bash
npm install ethers hardhat @openzeppelin/hardhat-upgrades @nomicfoundation/hardhat-toolbox react-router-dom
```

---

## 🎯 Objectif du projet

Ce projet open-source vise à :

- Démontrer l’utilité d’un **token utilitaire (CKF)** dans une app décentralisée
- Mettre en place une **zone premium conditionnée par paiement Web3**
- Inspirer les développeurs à créer des dashboards Web3 interactifs

---

## 🌐 SEO & Référencement

Optimisé avec :
- 📛 Mots-clés : `dashboard`, `token`, `premium`, `React`, `Web3`, `crypto`
- 🔗 Liens vers contrat + composants stratégiques
- 🏷️ Tags GitHub recommandés : `react`, `web3`, `bsc`, `ethers`, `dashboard`, `crypto`, `ckf`
- ✅ Titre et badges cohérents
- 📘 Licence claire

---

## 📄 Licence

Ce projet est sous **double licence** :

- 🔓 Usage personnel, éducatif ou non-commercial → [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)
- 🔒 Usage professionnel / commercial → licence payante

📬 Contact : [ckilmefo@gmail.com](mailto:ckilmefo@gmail.com)

---

## 📁 Autres projets CKILFO

- [ckilfo-dashboard (version HTML)](https://github.com/CKILFO/ckilfo-dashboard)
- [ckf-dashboard (version React Premium)](https://github.com/CKILFO/ckf-dashboard)

---

## 👤 Auteur

**CKILFO**  
🌍 [github.com/CKILFO](https://github.com/CKILFO)  
📧 [ckilmefo@gmail.com](mailto:ckilmefo@gmail.com)

---

## ⭐️ Soutiens le projet

Si tu trouves ce dashboard utile ou inspirant, laisse un ⭐ sur ce dépôt !
