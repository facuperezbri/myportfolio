# myportfolio

Portfolio personal de Facundo Pérez Brizuela. Sitio estático bilingüe (ES/EN) con dark theme,
construido con las últimas versiones del stack moderno de React.

## Stack

- **Next.js 16** (App Router, React Server Components)
- **React 19**
- **TypeScript 6**
- **Tailwind CSS v4** (CSS-first, `@theme`)
- **next/font** (fuentes self-hosted, sin render-blocking)
- **Vercel Analytics + Speed Insights**

## Estructura

```
src/
├── app/
│   ├── layout.tsx              # Root layout (passthrough)
│   ├── page.tsx                # Redirect → /en
│   ├── globals.css             # Tailwind @import, @theme tokens, @layer base
│   └── [lang]/
│       ├── layout.tsx          # Layout localizado: html lang, next/font, metadata
│       ├── page.tsx            # Página principal del portfolio
│       └── not-found.tsx       # 404 localizado
├── components/
│   ├── portfolio/              # Secciones del sitio
│   │   ├── NavBar.tsx          # Nav fija con menú mobile y toggle ES/EN
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/                     # Primitivos reutilizables
│       ├── Container.tsx
│       ├── Section.tsx
│       ├── SectionHeading.tsx
│       └── ExternalLink.tsx
├── constants/
│   └── portfolioData.ts        # Proyectos, experiencia, stack, contacto
├── i18n/
│   ├── config.ts               # locales, defaultLocale, resolveLocale
│   ├── index.ts                # getDictionary
│   └── dictionaries/
│       ├── en.ts
│       └── es.ts
└── proxy.ts                    # Middleware Next.js 16: locale redirect
```

## Setup

Ver [SETUP.md](./SETUP.md).

## Deploy

Configurado para Vercel. Deploy automático desde `main`. No requiere variables de entorno.
