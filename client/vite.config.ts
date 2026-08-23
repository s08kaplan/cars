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
        target: "http://localhost:4040",
        changeOrigin: true,
        /* rewrite: (path) => path.replace(/^\/api/, ""), */
        secure: false,
      },
      "/uploads": {
        target: "http://localhost:4040",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
