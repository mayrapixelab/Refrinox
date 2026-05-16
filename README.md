# Refrinox Web

Sitio web premium para Refrinox — Innovación Mexicana para la Industria del Helado.

## Stack

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript estricto
- **Estilos**: Tailwind CSS v4
- **Animaciones**: Motion (Framer Motion v11+)
- **Scroll suave**: Lenis
- **Iconos**: Lucide React
- **Deploy**: Hostinger Managed Node.js

## Levantar el proyecto

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Estructura

```
src/
├── app/              → Layout, páginas, globals.css
├── components/
│   ├── sections/     → Secciones de página (Hero, Features, etc.)
│   ├── ui/           → Componentes base (aurora-background, scroll-gradient)
│   └── shared/       → Componentes globales (AnimationObserver, Nav, Footer)
├── lib/              → utils (cn)
└── styles/           → theme.css con tokens de marca Refrinox
```

## Recursos compartidos del monorepo

- `../../design-system/tokens.css` — tokens base OKLCH
- `../../design-system/animations.css` — catálogo de animaciones reutilizables

## Agregar secciones

Usar `/agregar-seccion [tipo]` — crea la sección animada con la estructura correcta.

## Deploy

Usar `/deploy-hostinger` cuando las fases SEO y Seguridad estén aprobadas.
