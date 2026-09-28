import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import devtoolsJson from "vite-plugin-devtools-json";

export default defineConfig({
  resolve: {
    tsconfigPaths: true, // Native Vite path mapping
  },
  plugins: [tailwindcss(), reactRouter(), devtoolsJson()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        /* target: "http://localhost:4040", */
        target: "https://cars-backend-hp2t.onrender.com",
        changeOrigin: true,
        /* rewrite: (path) => path.replace(/^\/api/, ""), */
        secure: false,
      },
      "/uploads": {
        target: "https://cars-backend-hp2t.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
