import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "case-study-kozmo-portal": resolve(__dirname, "case-study-kozmo-portal.html"),
        "case-study-kozmo-ai-intake": resolve(__dirname, "case-study-kozmo-ai-intake.html"),
        "case-study-econtracts": resolve(__dirname, "case-study-econtracts.html"),
      },
    },
  },
});
