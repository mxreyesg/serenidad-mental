# Serenidad Mental

Sitio web de Gloria Hernández — psicóloga / terapeuta.

## Stack

- React 18 + Vite
- Tailwind CSS + shadcn/ui
- React Router DOM
- Framer Motion

## Desarrollo local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy en Netlify

El sitio se despliega automáticamente desde GitHub. Configuración en `netlify.toml`.

### Variables de entorno

No se requieren variables de entorno para el funcionamiento básico del sitio.

### Formulario de contacto

El formulario en `src/components/home/ContactForm.jsx` está listo para conectarse a:
- **Netlify Forms** (recomendado si usas Netlify): agrega `data-netlify="true"` al `<form>`
- **Formspree**: descomenta y configura el fetch en `handleSubmit`
- **Tu propio API**
