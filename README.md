# README

A simple NestJS demo, to create a user management module with minimal RBAC guard.
Please check documentation at **http://localhost:3000/api/** (or any other root url you have setup).

## Running the api

Please make sure you have docker installed if you want to use the given db setup.

```bash
$ npm run db:dev:up
$ prisma:dev:deploy # seeding the db
```

After db installation:

```bash
$ npm install
$ npm run start:dev
```

Do check out package.json for other pre-defined command.