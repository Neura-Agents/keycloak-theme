import { keycloakify } from "keycloakify/vite-plugin";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), keycloakify({
    accountThemeImplementation: "none",
    environmentVariables: [
        { name: "VITE_APP_NAME", default: "WormLabs" },
        { name: "VITE_APP_TAGLINE", default: "Build and deploy AI agents effortlessly." },
        { name: "VITE_APP_THEME", default: "dark" },
        { name: "VITE_HOME_URL", default: "http://localhost:7999" }
    ]
  })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
});