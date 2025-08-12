# AI Code Composer — Brief de implementación

**Proyecto:** Landing page para alquiler de coche clásico con chófer para bodas (Citroën DS 23 Pallas “Tiburón”).
**Idioma del sitio:** Español.
**Objetivo:** Primera versión *production‑ready*, ligera, elegante y sin “fluff”, enfocada a conversión por WhatsApp.
**CTA principal:** WhatsApp a **+34 669 77 21 66** (enlace con texto pre‑rellenado).
**Hosting previsto:** Vercel.

---

## 1) Rol y Modo de Trabajo del Compositor

**Tú eres** un/a Senior Front‑End Engineer y Product Designer.
**Entrega** un proyecto **Next.js (App Router) + TypeScript + Tailwind CSS** listo para desplegar en Vercel, sin rutas ni assets absolutos de filesystem, con UX mobile‑first, accesible y rápido.
**No inventes secciones ni contenidos** fuera de lo indicado. Mantén el diseño sobrio y elegante.

Al finalizar, el repositorio debe **compilar sin errores** (`npm run build`) y ejecutar (`npm start`) mostrando todas las páginas y la galería con imágenes reales leídas desde `/public/car-photos`.

---

## 2) Stack y Librerías

* **Framework:** Next.js 14+ (App Router).
* **Lenguaje:** TypeScript.
* **Estilos:** Tailwind CSS.
* **Imagenes:** `next/image` con `sizes`, `priority` táctico y placeholders LQIP.
* **Fuentes:** `next/font` (1 serif elegante para títulos y 1 sans para texto).
* **Sin UI kits pesados**; solo Tailwind y componentes propios.
* **Sin librerías de animación pesadas**; usa transiciones CSS y `prefers-reduced-motion`.
* **Node script + sharp** para generar *manifest* de la galería con dimensiones y blurDataURL.

> **Nota sobre rutas/paths**: No uses rutas absolutas de filesystem. Los assets estáticos viven en `/public`. Las imágenes se referencian como `/car-photos/…` (raíz del sitio), lo cual es válido en producción.

---

## 3) Estructura de carpetas

```
root
├─ app
│  ├─ (site)
│  │  ├─ layout.tsx
│  │  ├─ page.tsx                 # Home (/)
│  │  └─ galeria
│  │     └─ page.tsx              # Galería (/galeria)
│  └─ not-found.tsx               # 404 minimalista
├─ components
│  ├─ header.tsx
│  ├─ footer.tsx
│  ├─ whatsapp-button.tsx
│  ├─ hero.tsx
│  ├─ services.tsx
│  ├─ gallery-preview.tsx
│  ├─ contact-strip.tsx
│  └─ gallery-grid.tsx            # con lightbox accesible
├─ lib
│  └─ gallery.ts                  # helpers para la galería
├─ public
│  └─ car-photos                   # (carpeta con las fotos)
├─ scripts
│  └─ generate-gallery-manifest.mjs
├─ styles
│  └─ globals.css
├─ content
│  └─ copy.es.ts                  # textos centralizados
├─ .eslintrc.cjs / .prettierrc
├─ tailwind.config.ts
└─ package.json
```

---

## 4) Rutas y Navegación

* **/** (Home): portada con hero, bloque de servicios, vista previa de galería, franja de contacto/CTA y pie.
* **/galeria** (Galería): grid de todas las fotos con lightbox; header con enlace a **Servicios** (ancla `/#servicios`).
* **/404** minimal.

**Header** fijo, simple, con links: **Servicios**, **Galería**, y botón destacado **Reservar por WhatsApp**.
En móviles, menú compacto tipo “burger” con panel accesible (focus trapping).

**CTA WhatsApp (global):** botón fijo inferior en móviles (safe‑area) y en header/hero en desktop.
Enlace: `https://wa.me/34669772166?text=${MENSAJE_URL_ENCODED}`.

**Mensaje pre‑relleno sugerido (ES):**

> "Hola, me interesa reservar el Citroën DS 23 Pallas para mi boda. Fecha: \_\_, lugar: \_\_ (Madrid y alrededores). ¿Disponibilidad? Gracias."

---

## 5) Secciones permitidas y especificación de diseño

> **No añadir** otras secciones. Mantener este orden, espaciado generoso y tipografía elegante.

### 5.1 Header

* Logotipo/wordmark simple (texto por ahora).
* Navegación: `Servicios`, `Galería`.
* Botón primario: **Reservar por WhatsApp** (visible en ≥md).
* Fondo blanco, borde inferior sutil (`border-b`), sombra muy ligera en scroll.
* Accesible (roles, `aria-label`, enfoque visible).

### 5.2 Hero (por encima del pliegue)

* **Imagen de fondo** del coche (Next/Image, `priority`).
* **Overlay** suave para legibilidad.
* **Título (H1) conciso:** *“Coche clásico para bodas, con chófer”*.
* **Subtítulo:** *“Citroën DS 23 Pallas ‘Tiburón’. Elegancia atemporal en tu día.”*
* **Botones:** `Reservar por WhatsApp` (primario), `Ver galería` (secundario → `/galeria`).
* Alturas: \~80vh en desktop, 70–80vh en mobile.
* Tipografía: serif elegante para H1, sans para el resto.

### 5.3 Servicios (id="servicios")

Bloque limpio con 3–4 bullet “servicios incluidos”, **sin precios** por defecto:

* **Coche con chófer (≈5 h)**: recogidas, esperas y traslados.
* **Ceremonia y fotos**: tiempo para fotos con el coche.
* **Coche impecable**: cuidado y presentación.
* **Madrid y alrededores**: desplazamientos habituales.

Incluye un párrafo corto y humano (ver *Copy* más abajo).
CTA secundario: `Consultar disponibilidad por WhatsApp`.

### 5.4 Vista previa de Galería

* Grid de 6–8 imágenes (LQIP, `loading="lazy"`).
* Botón centrado: `Ver todas las fotos` → `/galeria`.

### 5.5 Franja de Contacto (CTA)

* Franja con texto corto + botón grande a WhatsApp.
* En móviles, recordar que también existe el botón flotante.

### 5.6 Footer

* Texto mínimo: “Coche clásico para bodas · Madrid”.
* Teléfono visible y clicable.
* Sin enlaces innecesarios.

---

## 6) Galería (/galeria)

* **Header idéntico** al de Home (con enlace a **Servicios** → `/#servicios`).
* **Grid responsivo** (2 col en xs, 3 en sm, 4 en md+, con `gap-2`/`gap-3`).
* **Lightbox accesible**:

  * Abrir al hacer click, mostrar imagen grande, `alt` significativo.
  * Cerrar con `Esc`, clic en overlay, o botón close.
  * Navegación con teclas `←/→`, `focus` gestionado (portal).
* Todas las imágenes se leen dinámicamente desde `/public/car-photos` a través de un **manifest JSON** generado en build (ver §7).
* Orden: por nombre de archivo ascendente.
* Soporta `.jpg`, `.jpeg`, `.png`, `.webp`.

---

## 7) Carga de imágenes y Manifest

**Motivo:** para usar `next/image` con `placeholder="blur"` y tamaños correctos sin importar manualmente una a una.

### 7.1 Script de build (Sharp)

`scripts/generate-gallery-manifest.mjs`:

* Lee `/public/car-photos`.
* Para cada imagen, calcula `width`, `height` y genera `blurDataURL` base64 (LQIP).
* Escribe `/public/gallery-manifest.json` con estructura:

```json
[
  {
    "src": "/car-photos/DSC_0001.jpg",
    "width": 2400,
    "height": 1600,
    "blurDataURL": "data:image/jpeg;base64,/9j/…"
  }
]
```

### 7.2 Integración en `package.json`

* Añade script: `"prebuild": "node ./scripts/generate-gallery-manifest.mjs"`.
* `build` ejecutará `prebuild` automáticamente en Vercel.

### 7.3 Consumo en `/galeria`

* Cargar el JSON en un **Server Component** y renderizar `next/image` con `sizes` responsivo.

---

## 8) Copys (ES) — primera versión

Centraliza en `content/copy.es.ts` para fácil edición.

```ts
export const COPY = {
  brand: {
    name: "Coche de Boda",
    tagline: "Citroën DS 23 Pallas ‘Tiburón’"
  },
  nav: { servicios: "Servicios", galeria: "Galería", reservar: "Reservar por WhatsApp" },
  hero: {
    h1: "Coche clásico para bodas, con chófer",
    sub: "Citroën DS 23 Pallas ‘Tiburón’. Elegancia atemporal en tu día.",
    primaryCta: "Reservar por WhatsApp",
    secondaryCta: "Ver galería"
  },
  servicios: {
    title: "Servicios",
    intro:
      "Acompañamos vuestro gran día con un clásico impecable y un servicio cercano. Recogidas, trayectos, esperas y tiempo para fotos — todo con tranquilidad.",
    bullets: [
      "Coche con chófer (≈5 horas)",
      "Ceremonia y fotos con el coche",
      "Cuidado y presentación impecables",
      "Madrid y alrededores"
    ],
    cta: "Consultar disponibilidad por WhatsApp"
  },
  galeriaPreview: { title: "Galería", viewAll: "Ver todas las fotos" },
  contactStrip: {
    text: "¿Quieres confirmar la fecha o resolver dudas al instante?",
    cta: "Escríbenos por WhatsApp"
  },
  footer: {
    line: "Coche clásico para bodas · Madrid",
    phoneLabel: "Llámanos",
    phone: "+34 669 77 21 66"
  },
  whatsapp: {
    number: "34669772166",
    message:
      "Hola, me interesa reservar el Citroën DS 23 Pallas para mi boda. Fecha: __, lugar: __ (Madrid y alrededores). ¿Disponibilidad? Gracias."
  },
  flags: { showPrices: false }
};
```

> **Importante:** Por defecto `showPrices = false` (alineado con dirección: no mostrar precio hasta que contacten). El código debe estar preparado para, si se pone `true`, mostrar una tarjeta “Tarifa orientativa” sin negociación, **pero no implementarla ahora**.

---

## 9) Estilo visual y tipografía

* **Paleta:** fondo blanco, texto gris muy oscuro (`#111`), acentos discretos (p. ej. dorado suave para el CTA hover).
* **Tipografía:**

  * Títulos: Serif elegante (p. ej. Playfair Display a través de `next/font`).
  * Texto: Sans legible (p. ej. Inter).
* **Layout:** grid y `max-w-screen-lg`/`xl` con `px-4 sm:px-6`.
* **Espaciado:** generoso entre secciones (`py-12 sm:py-16`).
* **Componentes:** bordes sutiles, sombras muy suaves, `rounded-2xl` en tarjetas/imagenes.
* **Animaciones:** fundidos suaves (`transition-opacity/transform`), respetar `prefers-reduced-motion`.

---

## 10) Accesibilidad (WCAG AA)

* `alt` descriptivos en todas las imágenes.
* Focus visible, orden de tab correcto, roles ARIA en navegación/lightbox.
* Contraste ≥ 4.5:1 para texto normal.
* Lightbox: cierre con `Esc`, botón close con `aria-label`, y retorno de foco al trigger.
* Botón flotante no debe cubrir contenido clave; usar `env(safe-area-inset-bottom)`.

---

## 11) Rendimiento

* `next/image` con `sizes` adecuados; `priority` solo en la hero.
* LQIP desde manifest.
* Sin fuentes no usadas; `display: swap` via `next/font`.
* CSS crítico con Tailwind, sin librerías innecesarias.
* Evitar re‑renders; componentes de la galería como Server Components cuando proceda.

---

## 12) Detalles de Comportamiento

* **WhatsApp:**

  * Componente utilitario que construye `wa.me/${number}?text=${encodeURIComponent(message)}`.
  * En desktop abre WhatsApp Web; en móvil, app nativa si existe.
* **Header en scroll:** elevar sombra muy sutil.
* **Botón flotante:** visible en mobile, oculto en desktop si ya está el CTA arriba.
* **404:** mensaje breve + links a Home y Galería.

---

## 13) Implementación de la Galería

* `gallery-grid.tsx` recibe array del manifest: `{ src, width, height, blurDataURL }[]`.
* Usa `next/image` con `fill` dentro de contenedor aspect‑ratio (`[&>span]:!static` si hace falta).
* **Lightbox**: sin dependencias pesadas. Portal al `body`, overlay semitransparente, navegación con teclado, swipe opcional simple (pointer events).
* **SEO** no requerido, pero usa `alt` y `title` con etiquetas genéricas (“Citroën DS 23 Pallas en boda – foto X”).

---

## 14) Layout base (App Router)

* `app/(site)/layout.tsx` define `<html lang="es">` y `<body>` con `<Header/>`, `{children}`, `<Footer/>`.
* Metadatos mínimos (`metadata` de Next): `title` y `description` genéricos.

---

## 15) Controles Responsivos

* **Breakpoints Tailwind** por defecto.
* Hero: stack vertical en mobile; en desktop alinea texto a izquierda con max-width \~`max-w-xl`.
* Grid galería: `grid-cols-2 sm:grid-cols-3 md:grid-cols-4`.
* Touch targets ≥ 44px.

---

## 16) Validaciones y Criterios de Aceptación

**Compilación y calidad**

* `npm run lint` sin errores.
* `npm run type-check` sin errores.
* `npm run build` y `start` funcionan.

**Funcional**

* Home renderiza hero, servicios, vista previa de galería, franja CTA y footer.
* `/galeria` lee **todas** las imágenes de `/public/car-photos` vía manifest y muestra lightbox.
* En header de `/galeria` existe link a **Servicios** (`/#servicios`).
* CTA WhatsApp funciona y añade el **mensaje pre‑relleno** indicado.
* Botón flotante visible en móvil, no tapa el footer.

**Accesibilidad**

* Navegación 100% por teclado; focus claro.
* Lightbox accesible (Esc, focus trapping, labels).

**Rendimiento**

* LCP controlado (<2.5s en 4G simulado con imágenes optimizadas).
* Peso JS moderado (sin paquetes innecesarios).

---

## 17) Fuentes de Datos y Configuración

* Todas las fotos provienen de `/public/car-photos` (carpeta ya existente en el repo).
* No se añadirá contenido de terceros.
* No mostrar precios por defecto (alineado con negocio).
* Teléfono/WhatsApp definidos en `content/copy.es.ts`.

---

## 18) Fuera de alcance (por ahora)

* SEO avanzado, analytics, formularios, emails, multi‑idioma.
* CMS.
* Integraciones externas (salvo WhatsApp).
* Precios o pasarelas de pago.

---

## 19) Checklist para el Compositor

* [ ] Proyecto Next 14+ App Router, TS, Tailwind, `next/font`, `next/image`.
* [ ] Script Sharp genera `public/gallery-manifest.json` en `prebuild`.
* [ ] `/` y `/galeria` operativas y enlazadas.
* [ ] CTA WhatsApp (header, hero, franja, flotante en mobile).
* [ ] Copys en `content/copy.es.ts`.
* [ ] Accesibilidad y teclado en lightbox.
* [ ] Sin errores de lint/types.
* [ ] Sin rutas absolutas de filesystem.

---

## 20) Entregables

* Repositorio listo para Vercel.
* Instrucciones breves en `README.md` (instalación, scripts disponibles).
* Confirmación de que `/galeria` muestra las imágenes del directorio indicado.

---

## 21) Micro‑guía de estilo (resumen)

* Minimalismo: aire, tipografía, foco en el coche.
* Paleta neutra + acento discreto.
* Fotos protagonistas (sin marcos recargados).
* Texto natural y breve; CTA claros.
* Nada de sliders automáticos ni efectos estridentes.
