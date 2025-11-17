# Dev & Tech - Backend

API backend construite avec NestJS, PostgreSQL et Prisma.

## Prérequis

- Node.js 18+
- PostgreSQL 14+
- npm ou yarn

## Installation

```bash
npm install
```

## Configuration

1. Copiez `.env.example` vers `.env` et configurez vos variables d'environnement :

```bash
cp .env.example .env
```

2. Configurez votre base de données PostgreSQL dans `.env`

3. Générez le client Prisma :

```bash
npm run prisma:generate
```

4. Exécutez les migrations :

```bash
npm run prisma:migrate
```

## Développement

```bash
npm run start:dev
```

L'API sera accessible sur `http://localhost:4000`

## Structure du projet

```
src/
├── auth/          # Module d'authentification
├── users/         # Module de gestion des utilisateurs
├── projects/      # Module de gestion des projets
├── sponsors/      # Module de gestion des sponsors
├── messages/      # Module de messagerie (WebSocket)
└── prisma/        # Service Prisma
```

## API Documentation

L'API est accessible via le préfixe `/api`. Exemples :

- `POST /api/auth/register` - Inscription
- `POST /api/auth/login` - Connexion
- `GET /api/auth/me` - Profil utilisateur actuel
- `GET /api/projects` - Liste des projets
- `GET /api/sponsors` - Liste des sponsors (public)

