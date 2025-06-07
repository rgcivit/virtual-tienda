//import React from 'react'; // Debe estar al inicio de cada archivo JSX
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      // Habilita JSX en archivos .js y .jsx
      include: /\.(js|jsx)$/,
    })
  ],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  resolve: {
    extensions: ['.js', '.jsx'] // Añade .jsx a las extensiones resueltas
  }
});