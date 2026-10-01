# MASKFORGE // 3D FUTURE LAB

Landing page cyberpunk para promocionar diseño personalizado de máscaras 3D.

## Concepto

Estética original inspirada en:
- Cyberpunk / sci-fi industrial
- Tecnología analógica y retrofuturista
- Cine de robots y supervivencia post-apocalíptica
- Interfaces militares / terminales de sistema

> El sitio no utiliza logos ni material oficial de franquicias; la estética es una interpretación original.

## Estructura

```text
maskforge-cyberpunk/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── .github/
│   └── workflows/
│       └── deploy.yml
└── README.md
```

## Publicar en GitHub

### 1. Crear repositorio

Crea un repositorio, por ejemplo:

`maskforge-cyberpunk`

### 2. Subir el proyecto

```bash
git init
git add .
git commit -m "feat: initial MASKFORGE cyberpunk landing"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/maskforge-cyberpunk.git
git push -u origin main
```

### 3. Activar GitHub Pages

En GitHub:

`Settings → Pages → Build and deployment → Source: GitHub Actions`

El workflow `.github/workflows/deploy.yml` validará los archivos y hará el deploy automáticamente.

Cada `git push` a `main` vuelve a ejecutar CI/CD.

## CI/CD

```text
Developer
   │
   ▼
Git Push → GitHub
   │
   ▼
GitHub Actions
   │
   ├── Validate
   │    ├── index.html
   │    ├── css/style.css
   │    └── js/app.js
   │
   ▼
GitHub Pages
   │
   ▼
MASKFORGE // LIVE
```

## Personalización

Puedes cambiar:
- Nombre de marca en `index.html`
- Colores en `:root` de `css/style.css`
- Modelos y textos
- Email de contacto
- Catálogo
- Integración con un formulario real
- Imágenes 3D reales
- Dominio personalizado

## Desarrollo local

Puedes abrir `index.html` directamente o usar:

```bash
python3 -m http.server 8000
```

Luego visita:

`http://localhost:8000`

## Próximas mejoras

- Galería real de modelos 3D
- Viewer 3D con Three.js
- Formulario conectado a backend
- Cotizador automático
- Stripe/Mercado Pago
- Inventario de piezas
- Pipeline con pruebas HTML/CSS/JS
- Deploy alternativo a AWS S3 + CloudFront
