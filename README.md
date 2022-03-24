# Projet de l'API oQuiz repris en Typescript avec NestJS, Mongo et Mongoose

## Description

> oQuiz est un petit jeu de type questionnaire avec choix multiple pour les réponses

---

## Mise en place de la BDD

### Création du USER pour la connexion

Une fois le shell mongodb

```bash
use admin

db.createUser(
   {
     user: "userName",
     pwd: "userPassword",
     roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
   }
 )

```

---

### Création de la BDD et des collections

Toujours dans le shell mongodb
Selectionner une bdd la créer automatiquement si elle n'existe pas (attention toute fois, si vous n'ajoutez pas de collection à la bdd ainsi crée, elle ne sera pas sauvegardée si vous quitter le shell mongo)

```bash
use oquiz
```

`Rappel les collections en mongodb sont mis aux pluriels par rapport aux Models crées dans le code (ex: quiz > quizzes)`

```bash
db.createCollection('answers')
db.createCollection('levels')
db.createCollection('questions')
db.createCollection('quizzes')
db.createCollection('tags')
db.createCollection('users')
```

### AJout des données depuis les fichiers JSON fournis

Quittez ensuite le shell mongo (exit) et utlisez mongoimport pour importer les données du dossier 'data' comme documents dans les collections (adapter le chemin du fichier à importer)

```bash
mongoimport --db oquiz --collection answer --drop --file ./data/answer.crud.json
mongoimport --db oquiz --collection answer --drop --file ./data/level.crud.json
mongoimport --db oquiz --collection answer --drop --file ./data/question.crud.json
mongoimport --db oquiz --collection answer --drop --file ./data/quiz.crud.json
mongoimport --db oquiz --collection answer --drop --file ./data/tag.crud.json
mongoimport --db oquiz --collection answer --drop --file ./data/user.crud.json
```

---

## Installation

```bash
$ npm install
```

Créer un dossier config à l'intérieur du dossier /src, dans lequel il faudra créer un fichier keys.ts qui contiendra le code suivant:

```javascript
export default {
  mongoURI:
    'mongodb://db_user:db_password@db_url:db_port/db_name?authSource=admin',
};
```

---

## Pour démarrer l'application

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## TODO

- Finir la logique pour lié un tag à un quiz
- Finir les DTO avec des méthodes de validation de données
- Connecter le front du projet original
- créer un cookie de session qui permettra la connexion suivant le 'role' d'un USER
- JSDOC
