import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    minify: true,
    lib: {
      entry: "index.js",
      name: "SuperTabs",
      formats: ["iife"],
      fileName: () => "plugin.min.js",
    },
    rollupOptions: {
      // veilig: voorkomt dat node:* ooit in je browser-bundle probeert te komen
      external: (id) => id.startsWith("node:"),
    },
  },
});
