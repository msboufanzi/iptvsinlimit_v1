import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Removed splitVendorChunkPlugin as it was causing conflicts
  ],
  build: {
    // Generate source maps for production builds
    sourcemap: false,

    // Minify output
    minify: "terser",

    // Terser options
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },

    // Chunk size warning limit
    chunkSizeWarningLimit: 1000,

    // Rollup options
    rollupOptions: {
      output: {
        // Chunk files - fixed the utils reference that was causing the error
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          icons: ["react-icons"],
          // Removed the problematic utils reference
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

