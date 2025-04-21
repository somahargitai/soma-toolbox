import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import type { ConfigEnv } from "vite";

// https://vite.dev/config/
export default defineConfig((_: ConfigEnv) => {
  const isProduction = process.env.VERCEL_ENV === "production";
  return {
    base: isProduction ? "/toolbox/" : "/", // Use "/toolbox/" only in production
    plugins: [react()],
    build: {
      outDir: "dist",
    },
    server: {
      // Vite doesn't have historyApiFallback, but it has similar functionality built-in
      // for Single Page Applications with HTML5 history API
      open: true,
    },
  };
});
