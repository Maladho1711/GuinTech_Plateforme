# Dev & Tech - Plateforme Communautaire

Plateforme web communautaire complète pour la collaboration, la gestion de projets, la communication et le partage de ressources.

## 🚀 Technologies

### Frontend
- **React 18** avec TypeScript
- **Vite** pour le build
- **Redux Toolkit** pour la gestion d'état
- **TailwindCSS** pour le styling
- **React Router** pour la navigation

### Backend
- **NestJS** (Node.js)
- **PostgreSQL** avec Prisma ORM
- **JWT** pour l'authentification
- **WebSockets** (Socket.io) pour la messagerie temps réel

## 📁 Structure du projet

```
Dev_Tech_app/
├── frontend/          # Application React
├── backend/           # API NestJS
└── README.md          # Ce fichier
```

## 🛠️ Installation

### Prérequis
- Node.js 18+ et npm
- PostgreSQL 14+
- Git

### Frontend

```bash
cd frontend
npm install
npm run dev
```

L'application frontend sera accessible sur `http://localhost:3000`

### Backend

```bash
cd backend
npm install

# Configurer .env (voir backend/env.example)
cp env.example .env

# Générer le client Prisma
npm run prisma:generate

# Exécuter les migrations
npm run prisma:migrate

# Démarrer le serveur
npm run start:dev
```

L'API sera accessible sur `http://localhost:4000`

## 📋 Fonctionnalités

### ✅ Implémentées

- ✅ Authentification complète (inscription, connexion, JWT)
- ✅ Gestion des rôles (member, admin, super_admin)
- ✅ Structure frontend complète avec routing
- ✅ Design System (couleurs, typographies, composants)
- ✅ Layouts (Header avec menu mobile, Footer dynamique avec sponsors)
- ✅ Pages principales (Accueil, Dashboard, Projets)
- ✅ API backend avec NestJS
- ✅ Base de données Prisma avec schéma complet
- ✅ Gestion des sponsors/partenaires (Super Admin)
- ✅ Design responsive (mobile, tablette, desktop)

### 🚧 En cours de développement

- Gestion complète des projets (Kanban, tâches)
- Messagerie temps réel
- Forum et discussions
- Calendrier et événements
- Bibliothèque de ressources
- Annuaire des membres
- Administration complète

## 🎨 Design System

- **Couleurs principales** : Bleu (#2563EB), Bleu clair (#60A5FA)
- **Typographies** : Poppins (titres), Inter (corps)
- **Composants** : Boutons, cartes, formulaires avec états hover/disabled
- **Responsive** : Mobile-first avec breakpoints sm, md, lg

## 🔐 Sécurité

- Authentification JWT
- Tokens stockés en mémoire (pas de localStorage)
- Validation des entrées côté serveur
- Chiffrement des mots de passe (bcrypt)
- Guards et rôles pour la protection des routes

## 📝 Documentation

Voir les README dans chaque dossier (`frontend/README.md`, `backend/README.md`) pour plus de détails.

## 🤝 Contribution

Ce projet est en développement actif. Les contributions sont les bienvenues !

## 📄 Licence

Propriétaire - Tous droits réservés

