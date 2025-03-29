![Licence double](https://img.shields.io/badge/Licence-Perso%20libre%20%7C%20Pro%20payante-orange)
[![CC BY-NC 4.0](https://img.shields.io/badge/Licence-CC%20BY--NC%204.0-lightgrey)](https://creativecommons.org/licenses/by-nc/4.0/)

# 🔥 CKILFO Premium Dashboard – Dashboard React avec paiement token CKF

Bienvenue dans le **dashboard premium CKILFO**, un tableau de bord Web3 conçu pour offrir des fonctionnalités avancées via paiement en **token CKF** sur la **Binance Smart Chain (Testnet)**.

🛠️ Parfait pour explorer les cas d’usage des smart contracts, des tokens utilitaires et de l’accès premium décentralisé.

---

## 🪙 Fonctionnalités Premium intégrées

Le dashboard propose un système de **paiement on-chain** et de **gestion d’abonnements premium** basé sur un contrat intelligent.

### ✅ Ce que le module premium permet :
- 💰 **Paiement unique de 100 CKF** via MetaMask
- 🔐 Vérification automatique de l’accès via `isPremium(address)`
- 🔁 **Redirection vers `/premium`** une fois le paiement validé
- 🏅 Affichage dynamique d’un badge Premium

### 🔗 Contrat intelligent déployé sur BSC Testnet
- Adresse Proxy : [`0x43988e9f76AB3Ce8eB09cF1F72e567CFF93AdA46`](https://testnet.bscscan.com/address/0x43988e9f76AB3Ce8eB09cF1F72e567CFF93AdA46)

#### Fonction utilisée dans le contrat :
```solidity
function payForPremium() external
```

📁 Fichier React concerné : `src/components/DashboardPremium.jsx`

---

## 🧩 Fonctionnalités principales du Dashboard

- 🔑 Connexion Web3 / MetaMask sécurisée
- 💼 Paiement via token natif `CKF`
- 🧠 Vérification du statut Premium avec affichage conditionnel
- 🎯 Redirection intelligente vers zone privée (`/premium`)
- 📊 Visualisation de solde, badge, et message de statut

---

## ⚙️ Stack technique utilisée

- ⚛️ **React 18** (frontend UI)
- 🔗 **Ethers.js** (intégration blockchain)
- 🧪 **Hardhat** + OpenZeppelin (smart contract upgradeable)
- 🎨 **Tailwind CSS** (design responsive)
- 💡 **Solidity 0.8.20** (contrats proxy BSC)

---

## 📦 Installation & lancement local

```bash
git clone https://github.com/CKILFO/ckf-dashboard.git
cd ckf-dashboard
npm install
npm run dev
```

➡️ Accédez ensuite à `http://localhost:3000`

---

## 📚 Dépendances importantes

```bash
npm install ethers hardhat @openzeppelin/hardhat-upgrades @nomicfoundation/hardhat-toolbox react-router-dom
```

---

## 🎯 Objectif du projet

Ce projet open-source vise à :

- Démontrer l’utilité des tokens pour contrôler des **zones Premium**
- Intégrer un système **Web3 simple** pour applications React
- Permettre aux développeurs de tester des mécanismes de **paywall décentralisé**

Il s’inscrit dans l’écosystème **CKILFO Token (CKF)** et pourra évoluer vers un produit public grand public.

---

## 🌐 SEO et référencement

Optimisé avec :
- 📛 Titre explicite, mots clés : `dashboard`, `premium`, `React`, `token`, `Web3`
- 🔗 Liens vers le contrat et fichiers stratégiques
- 🏷️ Tags GitHub recommandés : `react`, `web3`, `bsc`, `ethers`, `dashboard`, `crypto`
- 🧾 Badges : Licence double, email pro, accès Premium

➡️ Pensez à ajouter une **description du repo GitHub** et des **topics** :
```
dashboard, react, smart-contract, crypto, ckf, web3, binance-smart-chain
```

---

## 📄 Licence d'utilisation

Ce projet est distribué sous **double licence** :

- 🔓 **Usage personnel, éducatif ou non-commercial** → autorisé sous [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/deed.fr)
- 🔒 **Usage commercial ou professionnel** → nécessite une **licence payante**

📬 Pour toute utilisation commerciale, contactez-moi à :  
[![Email](https://img.shields.io/badge/💼%20Licence%20pro-Contacter%20CKILFO-blue)](mailto:ckilmefo@gmail.com)

---

## 📁 Autres dépôts liés à CKILFO

- [ckilfo-dashboard (version HTML)](https://github.com/CKILFO/ckilfo-dashboard)
- [ckf-dashboard (React premium + Web3)](https://github.com/CKILFO/ckf-dashboard)

---

## 👤 Auteur & Contact

👨‍💻 Auteur : **CKILFO**  
📧 Email : [ckilmefo@gmail.com](mailto:ckilmefo@gmail.com)  
🌍 GitHub : [github.com/CKILFO](https://github.com/CKILFO)
![Licence](https://img.shields.io/badge/Licence-Perso%20libre%20%7C%20Pro%20payante-orange)
---

## ⭐️ Aide-moi à faire connaître ce projet

> Si tu trouves ce dashboard utile ou inspirant, n’oublie pas de laisser un ⭐ sur le dépôt !

