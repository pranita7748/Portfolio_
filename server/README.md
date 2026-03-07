# Portfolio API

Express + TypeScript backend for the recruiter-ready portfolio.

## Setup

```sh
npm install
```

## Scripts

- `npm run dev` — run with hot reload (tsx watch)
- `npm run build` — compile to `dist/`
- `npm run start` — run compiled `dist/index.js`

## Endpoints

| Method | Path           | Description                          |
|--------|----------------|--------------------------------------|
| GET    | /api/health    | Health check                         |
| POST   | /api/contact   | Submit contact form (name, email, msg) |

## Data

Contact submissions are stored in `data/submissions.json`. The file is created automatically and is gitignored.

## Config

- `PORT` — server port (default: 3001)
