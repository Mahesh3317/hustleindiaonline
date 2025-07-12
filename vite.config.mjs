import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tagger from "@dhiwise/component-tagger";

// https://vitejs.dev/config/
export default defineConfig({
  // ✅ This makes your site work correctly on Netlify or GitHub Pages
  base: "./",
  
  // ✅ Build output settings
  build: {
    outDir: "build", // This creates a "build/" folder instead of "dist/"
    chunkSizeWarningLimit: 2000, // Optional: suppress large chunk warning
  },

  // ✅ All required plugins
  plugins: [tsconfigPaths(), react(), tagger()],

  // ✅ Local dev server settings
  server: {
    port: "4028",
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: ['.amazonaws.com', '.builtwithrocket.new']
  }
});
