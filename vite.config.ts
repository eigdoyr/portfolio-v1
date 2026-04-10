import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    compression({ algorithm: "brotliCompress", ext: ".br" }),
    compression({ algorithm: "gzip", ext: ".gz" }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@components": resolve(__dirname, "src/components"),
      "@sections": resolve(__dirname, "src/sections"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@data": resolve(__dirname, "src/data"),
      "@utils": resolve(__dirname, "src/utils"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("framer-motion")) return "motion";
            if (id.includes("lenis")) return "lenis";
            if (id.includes("react-router-dom")) return "router";
            if (id.includes("react-dom") || id.includes("react/"))
              return "vendor";
          }
        },
      },
    },
  },
});
