# 💬 chatBotFAIREESS

Ce dépôt contient le **script complet du chatbot de FAIRE ESS Occitanie**, destiné à guider les utilisateurs dans leur orientation vers des formations adaptées, tout en proposant une expérience interactive via une mascotte animée.

## 🧠 Fonctionnalités principales

Le chatbot FAIRE ESS repose sur un script unique qui gère :

- 🧾 **Affichage HTML/CSS** du chatbot  
- 🔁 **Comportement pop-up** (chatbot réduit ou déployé)  
- 🧭 **Orientation vers des formations** en fonction des **soft skills** détectées  
- 🌐 **Redirection vers le page web FAIRE ESS** pour des compléments d'information  
- 🎭 **Intégration des animations de la mascotte** (issues du dépôt [`IRTSMascotte`](https://github.com/Alec34pi/IRTSMascotte))  
- 📚 **Utilisation des données de formation** du dépôt [`dataFormations`](https://github.com/Alec34pi/dataFormations) pour proposer des parcours personnalisés

## 📂 Fichiers inclus

- `script.js`  
  ➤ Contient tout le fonctionnement du chatbot :
  - Structure HTML et styles CSS
  - Gestion de l'ouverture/fermeture (pop-up)
  - Logique d'orientation basée sur les soft skills
  - Chargement dynamique des données et vidéos de mascotte

- `index.html`  
  ➤ Permet de visualiser et tester le chatbot directement dans un navigateur

## 🔗 Dépendances

Ce projet s'appuie sur deux autres dépôts :

- [📁 `dataFormations`](https://github.com/Alec34pi/dataFormations) :  
  Contient les données JSON des formations (nom, niveau, soft skills)

- [📁 `IRTSMascotte`](https://github.com/Alec34pi/IRTSMascotte) :  
  Contient les vidéos d'animation de la mascotte utilisée dans le chatbot

## 🚀 Lancer le chatbot en local

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/Alec34pi/chatBotFAIREESS.git
   ```

2. Ouvrir le fichier `index.html` dans un navigateur pour visualiser le chatbot.

## 📁 Structure du dépôt

```
chatBotFAIREESS/
│
├── script.js           # Script principal du chatbot (logique + interface)
├── index.html          # Fichier de test pour visualiser le chatbot
└── README.md           # Documentation du projet
```

## 🤝 Contribuer

Les améliorations sont les bienvenues ! Pour corriger un bug ou proposer une nouvelle fonctionnalité, merci de créer une *issue* ou une *pull request*.

## 👀 Visualisation

Pour voir un exemple fonctionnel du chatbot, vous pouvez consulter la version en ligne via ce lien :  
[Visualiser le chatbot FAIRE ESS](https://htmlpreview.github.io/?https://raw.githubusercontent.com/Alec34pi/chatBotFAIREESS/master/index.html)

---
