import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import reactRefresh from "@vitejs/plugin-react-refresh";
import { resolve } from "path";
import tailwind from "tailwindcss";

export default defineConfig({
  plugins: [tailwind(), react()],
  resolve: {
    alias: {
      "~": resolve(__dirname, "./src"),
    },
  },
});

// https://vitejs.dev/config/

