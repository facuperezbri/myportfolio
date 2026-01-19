# Configuración del Proyecto

## Variables de Entorno

### OpenAI API Key

Para que el chat funcione, necesitas configurar tu API key de OpenAI.

#### Desarrollo Local

1. Crea un archivo `.env.local` en la raíz del proyecto (al mismo nivel que `package.json`)

2. Agrega tu API key:
```
OPENAI_API_KEY=sk-tu-api-key-aqui
```

3. Obtén tu API key:
   - Ve a https://platform.openai.com/api-keys
   - Inicia sesión o crea una cuenta
   - Haz clic en "Create new secret key"
   - Copia la key y pégala en `.env.local`

#### Producción (Vercel)

1. Ve a tu proyecto en Vercel Dashboard
2. Settings → Environment Variables
3. Agrega una nueva variable:
   - **Name:** `OPENAI_API_KEY`
   - **Value:** Tu API key de OpenAI
   - **Environment:** Production, Preview, Development (según necesites)
4. Guarda y redeploy la aplicación

## Optimizaciones Implementadas

### Costos Reducidos
- ✅ Cambiado de GPT-4 a GPT-3.5-turbo (90% más barato)
- ✅ Reducido `max_tokens` de 500 a 250
- ✅ Rate limiting: 10 requests por minuto por IP

### Seguridad y Limitaciones
- ✅ Validación de preguntas: solo responde sobre Facu Pérez Brizuela
- ✅ Rate limiting para prevenir abuso
- ✅ Validación de longitud de mensaje (máximo 500 caracteres)
- ✅ System prompt estricto que rechaza preguntas fuera de contexto

### Estimación de Costos

Con GPT-3.5-turbo:
- ~$0.0005 por pregunta (promedio)
- 1000 preguntas ≈ $0.50
- 10,000 preguntas ≈ $5.00

Con rate limiting de 10/minuto, el costo máximo por hora sería ~$0.30.
