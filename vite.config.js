// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: { exportType: 'named', ref: true, svgo: true, titleProp: true },
      include: '**/*.svg',
    }),
  ],
});