# Vue.js Template - Poner en Producción

Plantilla de Vue 3 + TypeScript + Vite optimizada para producción en Netlify con ESLint y Prettier configurados.

## 🚀 Características

- ⚡️ Vue 3 con Composition API
- 🔷 TypeScript con configuración estricta
- ⚡️ Vite para desarrollo y build ultrarrápido
- 🎨 Componentes con Scoped CSS
- 🔍 ESLint + Prettier para calidad de código
- 📦 Optimizado para producción
- 🌐 Listo para Netlify

## 📋 Requisitos Previos

- Node.js 20 o superior
- npm o yarn

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install
```

## 💻 Desarrollo

```bash
# Iniciar servidor de desarrollo en http://localhost:5173
npm run dev
```

El servidor de desarrollo incluye:
- Hot Module Replacement (HMR)
- Recarga rápida de componentes
- Chequeo de tipos en tiempo real

## 🔍 Calidad de Código

Este proyecto incluye ESLint y Prettier configurados para mantener código limpio y consistente.

```bash
# Ejecutar linter y auto-corregir problemas
npm run lint

# Solo verificar sin corregir
npm run lint:check

# Formatear código con Prettier
npm run format

# Verificar formato sin cambiar
npm run format:check

# Verificar tipos TypeScript
npm run typecheck
```

### Configuración de ESLint

- ✅ Integración con Vue 3
- ✅ Soporte completo para TypeScript
- ✅ Prettier integrado (sin conflictos)
- ✅ Reglas recomendadas para Vue + TS
- ✅ Auto-fix habilitado

### Configuración de Prettier

- Comillas simples
- Trailing commas
- Tab width: 2 espacios
- Print width: 80 caracteres
- Line ending: LF

## 🏗️ Build para Producción

```bash
# Generar build optimizado
npm run build

# Preview del build localmente
npm run preview
```

El comando `build` genera:
- Archivos minificados en `/dist`
- Assets con hash para cache óptimo
- Chunks separados por vendor
- Console.logs eliminados automáticamente

## 🌐 Deploy en Netlify

### Opción 1: Deploy desde Git (Recomendado)

1. **Subir código a GitHub/GitLab/Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Preparado para producción"
   git branch -M main
   git remote add origin <tu-repositorio>
   git push -u origin main
   ```

2. **Conectar con Netlify**
   - Ingresa a [Netlify](https://app.netlify.com)
   - Click en "Add new site" → "Import an existing project"
   - Selecciona tu repositorio
   - La configuración se detecta automáticamente desde `netlify.toml`
   - Click en "Deploy site"

3. **Deploy automático**
   - Cada push a `main` despliega automáticamente
   - Preview deploys para pull requests

### Opción 2: Deploy Manual con Netlify CLI

1. **Instalar Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login en Netlify**
   ```bash
   netlify login
   ```

3. **Build y deploy**
   ```bash
   # Build local
   npm run build
   
   # Deploy a producción
   netlify deploy --prod
   ```

### Opción 3: Drag & Drop

1. Ejecutar `npm run build`
2. Ir a [Netlify Drop](https://app.netlify.com/drop)
3. Arrastrar la carpeta `dist` generada

## ⚙️ Configuración de Netlify

El proyecto incluye `netlify.toml` con:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Variables de Entorno

Si necesitas variables de entorno:

1. En Netlify: **Site settings** → **Environment variables**
2. Agregar variables con prefijo `VITE_`:
   ```
   VITE_API_URL=https://api.ejemplo.com
   ```
3. Usar en el código:
   ```typescript
   const apiUrl = import.meta.env.VITE_API_URL
   ```

## 📁 Estructura del Proyecto

```
vuejs-template/
├── public/              # Assets estáticos
│   ├── vite.svg
│   └── _redirects      # Configuración de redirects para SPA
├── src/
│   ├── components/     # Componentes Vue
│   │   └── HelloWorld.vue
│   ├── assets/         # Assets procesados por Vite
│   ├── App.vue         # Componente raíz
│   ├── main.ts         # Entry point
│   └── style.css       # Estilos globales
├── index.html          # Template HTML
├── vite.config.ts      # Configuración de Vite
├── eslint.config.mjs   # Configuración de ESLint
├── .prettierrc         # Configuración de Prettier
├── tsconfig.json       # Configuración TypeScript
├── netlify.toml        # Configuración de Netlify
└── package.json        # Dependencias y scripts
```

## 🔧 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Genera build de producción |
| `npm run preview` | Preview del build localmente |
| `npm run lint` | Ejecuta ESLint y auto-corrige |
| `npm run lint:check` | Verifica código sin cambios |
| `npm run format` | Formatea código con Prettier |
| `npm run format:check` | Verifica formato |
| `npm run typecheck` | Verifica tipos TypeScript |

## 🎯 Optimizaciones de Producción

El proyecto está configurado para:

- ✅ Eliminación automática de `console.log` y `debugger`
- ✅ Minificación con esbuild (ultra rápido)
- ✅ Code splitting automático (vendor chunks)
- ✅ Cache óptimo de assets estáticos
- ✅ Headers de seguridad configurados
- ✅ Redirects para SPA routing
- ✅ Compresión y optimización de assets
- ✅ Linting y formato automático
- ✅ Type checking estricto

## 🔍 Troubleshooting

### Build falla en Netlify

Verificar versión de Node en `netlify.toml`:
```toml
[build.environment]
  NODE_VERSION = "20"
```

### Rutas 404 después del deploy

El archivo `public/_redirects` debe existir con:
```
/*    /index.html   200
```

### TypeScript errors en build

Ejecutar localmente para ver errores:
```bash
npm run typecheck
npm run build
```

### ESLint no funciona en VS Code

Asegúrate de tener instalada la extensión de ESLint:
```bash
code --install-extension dbaeumer.vscode-eslint
```

### Prettier no formatea automáticamente

Configurar VS Code para formatear al guardar:
1. Abrir Settings (Ctrl + ,)
2. Buscar "Format On Save"
3. Activar la opción

## 📚 Recursos

- [Documentación de Vue 3](https://vuejs.org/)
- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de Netlify](https://docs.netlify.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Prettier Options](https://prettier.io/docs/en/options.html)

## 🚀 Workflow Recomendado

1. **Desarrollo**
   ```bash
   npm run dev
   ```

2. **Antes de commit**
   ```bash
   npm run lint
   npm run format
   npm run typecheck
   ```

3. **Testing local del build**
   ```bash
   npm run build
   npm run preview
   ```

4. **Deploy**
   ```bash
   git add .
   git commit -m "feat: nueva característica"
   git push
   ```

## 📄 Licencia

Este proyecto es un template de código abierto.

---

Hecho con ❤️ usando Vue.js + Vite + TypeScript + ESLint + Prettier
