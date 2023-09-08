# Projet Todo : Application de Gestion de Tâches avec NestJS

![Logo NestJS](https://nestjs.com/img/logo-small.svg)

Ce projet a pour objectif de créer une API de gestion de tâches en utilisant NestJS, une plateforme Node.js. L'application permet d'effectuer des opérations de base telles que la création, la lecture, la mise à jour et la suppression de tâches.

## Fonctionnalités

- **Création de Tâches** : Vous pouvez ajouter de nouvelles tâches à votre liste.
- **Lecture des Tâches** : Consultez toutes les tâches présentes dans la liste.
- **Mise à Jour des Tâches** : Modifiez le nom ou l'état d'une tâche existante.
- **Suppression de Tâches** : Supprimez des tâches de la liste en toute simplicité.

## Utilisation

Pour utiliser cette application, suivez ces étapes simples :

1. Clonez ce dépôt : `git clone https://github.com/Ambrosioc/nestjs-todo-backend`
2. Accédez au répertoire du projet : `cd nestjs-todo-backend`
3. Installez les dépendances : `yarn install`
4. Exécutez l'application : `yarn start`
5. L'API sera accessible à l'adresse : `http://localhost:3000`

## Exemple d'utilisation

- **Créer une nouvelle tâche** :

  ```shell
  curl -X POST http://localhost:3000/todos -d 'task=Ma nouvelle tâche'
  ```

- **Lire toutes les tâches** :

  ```shell
  curl http://localhost:3000/todos
  ```

- **Mettre à jour une tâche existante (remplacez {id} par l'ID de la tâche)** :

```shell
Copy code
curl -X PUT http://localhost:3000/todos/{id} -d 'task=Nouveau nom de la tâche&completed=true'
```

- **Supprimer une tâche (remplacez {id} par l'ID de la tâche)** :

```shell
Copy code
curl -X DELETE http://localhost:3000/todos/{id}
```
