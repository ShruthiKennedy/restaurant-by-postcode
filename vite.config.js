import { defineConfig } from "vite";

export default defineConfig({
   build: {
        sourcemap: true
    },
  server: {
    proxy: {
      "/api": {
        target: "https://uk.api.just-eat.io",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
});