# Coche de Boda - Landing Page

Landing page para alquiler de Citroën DS 23 Pallas "Tiburón" para bodas en Madrid.

## Características

- **Next.js 14** con App Router y TypeScript
- **Tailwind CSS** para estilos responsive y mobile-first  
- **Galería automática** que lee imágenes desde `/public/car-photos`
- **WhatsApp CTA** integrado con mensaje pre-rellenado
- **Lightbox accesible** con navegación por teclado
- **Optimización de imágenes** con LQIP (Low Quality Image Placeholders)

## Instalación

```bash
# Instalar dependencias
npm install

# Generar manifest de galería y ejecutar en desarrollo
npm run dev
```

## Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build para producción (incluye generación de manifest)
- `npm run start` - Servidor de producción
- `npm run lint` - Verificar código con ESLint
- `npm run type-check` - Verificar tipos con TypeScript

## Estructura del Proyecto

```
├── app/
│   ├── (site)/
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Página de inicio
│   │   └── galeria/
│   │       └── page.tsx        # Página de galería
│   └── not-found.tsx           # Página 404
├── components/                 # Componentes React
├── content/
│   └── copy.es.ts             # Textos en español
├── lib/                       # Utilidades
├── public/
│   └── car-photos/            # 📸 Aquí van las fotos del coche
├── scripts/
│   └── generate-gallery-manifest.mjs  # Script para procesar imágenes
└── styles/
    └── globals.css            # Estilos globales
```

## Configuración de Imágenes

### Añadir Fotos

1. Coloca las imágenes en `/public/car-photos/`
2. Formatos soportados: `.jpg`, `.jpeg`, `.png`, `.webp`
3. Las imágenes se ordenan alfabéticamente por nombre de archivo

### Manifest de Galería

El script `generate-gallery-manifest.mjs` se ejecuta automáticamente en cada build:

- Escanea `/public/car-photos/`
- Genera placeholders LQIP para carga progresiva
- Extrae dimensiones de cada imagen
- Crea `/public/gallery-manifest.json`

## Personalización

### Textos y Configuración

Edita `content/copy.es.ts` para cambiar:
- Textos del sitio
- Número de WhatsApp
- Mensaje pre-rellenado
- Configuración de precios (`flags.showPrices`)

### Estilos

- Colores en `tailwind.config.ts`
- Estilos globales en `styles/globals.css`
- Fuentes configuradas en `lib/fonts.ts`

## Deployment en Vercel

1. Sube el repositorio a GitHub
2. Conecta con Vercel
3. El script `prebuild` se ejecutará automáticamente
4. ✅ ¡Listo para producción!

## Requisitos

- Node.js 18+
- Imágenes en `/public/car-photos/` para que la galería funcione correctamente

## Soporte

Para modificaciones o soporte técnico, revisa la documentación en el archivo `instructions.md`.
