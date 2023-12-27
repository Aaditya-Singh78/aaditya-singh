import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';

export default defineConfig({
  plugins: [react(),
  ],
  build:{
    css:{
    postcss:{
      plugins: [tailwindcss, autoprefixer],
      config: './postcss.config.cjs',
    },
  },
  }, 
  assetsInclude: '/\.(png|jpe?g|gif|svg)$i',
});
