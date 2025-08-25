# chatBotFAIREESS

Ce dépôt contient le **script complet du chatbot de FAIRE ESS Occitanie**, destiné à guider les utilisateurs dans leur orientation vers des formations adaptées, tout en proposant une expérience interactive via une mascotte animée.

## Fonctionnalités principales

Le chatbot FAIRE ESS repose sur un script unique qui gère :

- **Affichage HTML/CSS** du chatbot  
- **Comportement pop-up** (chatbot réduit ou déployé)  
- **Orientation vers des formations** en fonction des **soft skills** détectées  
- **Redirection vers le page web FAIRE ESS** pour des compléments d'information  
- **Intégration des animations de la mascotte** (issues du dépôt [`IRTSMascotte`](https://github.com/Alec34pi/IRTSMascotte))  
- **Utilisation des données de formation** du dépôt [`dataFormations`](https://github.com/Alec34pi/dataFormations) pour proposer des parcours personnalisés

## Fichiers inclus

- `script.js`  
  ➤ Contient tout le fonctionnement du chatbot :
  - Structure HTML et styles CSS
  - Gestion de l'ouverture/fermeture (pop-up)
  - Logique d'orientation basée sur les soft skills
  - Chargement dynamique des données et vidéos de mascotte

- `index.html`  
  ➤ Permet de visualiser et tester le chatbot directement dans un navigateur

- `infos.ods`  
  ➤ Fichier source contenant les informations principales des formations  

- `Chat bot 1.xlsx`  
  ➤ Tableur structurant les soft skills et leurs correspondances avec les formations  

## Dépendances

Ce projet s'appuie sur deux autres dépôts :

- [`dataFormations`](https://github.com/Alec34pi/dataFormations) :  
  Contient les données JSON des formations (nom, niveau, soft skills)

- [`IRTSMascotte`](https://github.com/Alec34pi/IRTSMascotte) :  
  Contient les vidéos d'animation de la mascotte utilisée dans le chatbot

## Sources des données

Deux fichiers de base sont inclus dans ce dépôt et servent à générer les données du projet [dataFormations](https://github.com/Alec34pi/dataFormations) :

- `infos.ods` : contient les informations principales des formations  
- `Chat bot 1.xlsx` : tableur structurant les soft skills et leurs correspondances avec les formations

## Mise en place

Pour ajouter le chatbot à votre propre site web :
- Copier le fichier script.js dans le dossier de votre site.
- Inclure le script dans votre page HTML, idéalement juste avant la balise </body> :
    `<script src="script.js"></script>`
- Le chatbot apparaîtra automatiquement sur votre site avec le même comportement pop-up et toutes les fonctionnalités interactives.
