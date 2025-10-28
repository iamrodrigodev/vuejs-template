import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],

  // Remover console.log y debugger en producción
  esbuild: {
    drop: ['console', 'debugger'],
  },

  // Optimizaciones de build para producción
  build: {
    // Generar sourcemaps para debugging en producción (opcional: false para producción)
    sourcemap: false,

    // Optimizar chunks para mejor caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue'],
        },
      },
    },

    // Mejorar rendimiento de build
    chunkSizeWarningLimit: 1000,

    // Usar esbuild para minificación (más rápido que terser)
    minify: 'esbuild',
  },

  // Configuración de preview server
  preview: {
    port: 4173,
    strictPort: true,
  },

  // Optimizar servidor de desarrollo
  server: {
    port: 5173,
    strictPort: true,
  },
});
