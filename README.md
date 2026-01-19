# Terminal Portfolio - Facu Pérez Brizuela

Portfolio interactivo estilo terminal CRT retro con integración de IA (OpenAI GPT-3.5-turbo).

## Características

- Terminal interactiva con estética CRT retro
- Integración con OpenAI GPT-4 para responder preguntas
- Efectos visuales: scanlines, glow, flicker
- Sonidos de teclado mecánico
- Autocompletado de comandos (Tab)
- Historial de comandos (flechas arriba/abajo)
- Múltiples temas (green, amber, white)
- Easter eggs y efectos especiales
- ASCII art para proyectos

## Comandos Disponibles

### Comandos Básicos
- `help` - Lista todos los comandos
- `about` - Información personal
- `skills` - Lista de habilidades técnicas
- `projects` - Muestra proyectos con ASCII art
- `contact` - Información de contacto
- `clear` - Limpia la terminal
- `theme [name]` - Cambia el tema (green, amber, white)

### Comandos IA
- `chat` - Inicia modo conversacional con la IA (solo responde sobre Facu)

### Easter Eggs
- `matrix` - Efecto Matrix rain
- `hack` - Simulación de "hacking"
- `sudo rm -rf /` - Respuesta humorística
- `cowsay [mensaje]` - ASCII cow con mensaje

## Setup

1. Instalar dependencias:
```bash
npm install
```

2. Crear archivo `.env.local` en la raíz del proyecto:
```bash
OPENAI_API_KEY=sk-tu-api-key-aqui
```

**Obtén tu API key:**
1. Ve a https://platform.openai.com/api-keys
2. Inicia sesión o crea una cuenta
3. Crea una nueva API key
4. Copia la key y pégala en `.env.local`

**Nota:** El chat está limitado a responder solo preguntas sobre Facu Pérez Brizuela y tiene rate limiting (10 requests por minuto por IP).

3. Copiar imágenes de proyectos a `public/projects/`:
- mercadolibre.png
- calculator.png
- wallet.png
- turnit.png

4. Ejecutar en desarrollo:
```bash
npm run dev
```

5. Build para producción:
```bash
npm run build
npm start
```

## Stack Tecnológico

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- OpenAI SDK
- Howler.js (sonidos)
- Framer Motion (animaciones)

## Deploy en Vercel

1. Conectar repositorio a Vercel
2. Agregar variable de entorno `OPENAI_API_KEY`
3. Deploy automático

## Estructura del Proyecto

```
src/
├── app/              # Next.js App Router
│   ├── api/chat/     # API route para OpenAI
│   ├── layout.tsx    # Layout principal
│   └── page.tsx      # Página principal
├── components/       # Componentes React
│   └── Terminal/     # Componentes de terminal
├── hooks/            # Custom hooks
├── lib/              # Utilidades y lógica
├── constants/        # Datos del portfolio
└── types/            # TypeScript types
```

## Notas

- La API key de OpenAI debe estar configurada para que funcionen los comandos de IA
- El chat usa GPT-3.5-turbo (más económico que GPT-4) y está limitado a 250 tokens por respuesta
- Rate limiting: máximo 10 requests por minuto por IP
- El chat solo responde preguntas sobre Facu Pérez Brizuela (portfolio, proyectos, skills, experiencia)
- Los sonidos de teclado pueden deshabilitarse modificando el hook `useSound`
- Los temas se pueden cambiar con el comando `theme`

## Configuración de Variables de Entorno

### Desarrollo Local
Crea un archivo `.env.local` en la raíz del proyecto:
```
OPENAI_API_KEY=sk-tu-api-key-aqui
```

### Producción (Vercel)
1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega `OPENAI_API_KEY` con tu API key
4. Redeploy la aplicación
