# Setup

## Requisitos

- Node 22 (ver `.nvmrc`)
- npm 10+

## Instalación

```bash
nvm use          # usa Node 22
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build de producción |
| `npm run lint` | ESLint sobre todo `src/` |
| `npm run typecheck` | TypeScript sin emitir archivos |

## Variables de entorno

No se requieren variables de entorno para correr el sitio.

## Deploy

El proyecto está configurado para Vercel (`vercel.json`). El deploy es automático
desde la rama `main`.

```bash
vercel deploy --prod
```
