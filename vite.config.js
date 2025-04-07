import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Generate source maps for production builds
    sourcemap: false,

    // Change minify from 'terser' to 'esbuild' which is included with Vite
    minify: "esbuild",

    // esbuild minify options
    target: "es2015",

    // Chunk size warning limit
    chunkSizeWarningLimit: 1000,

    // Rollup options
    rollupOptions: {
      output: {
        // Chunk files
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          icons: ["react-icons"],
        },
        // Chunk file naming
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },
  },
  server: {
    // Enable compression
    compress: true,
  },
  optimizeDeps: {
    // Include dependencies that should be pre-bundled
    include: ["react", "react-dom", "react-router-dom", "react-icons"],
  },
})

