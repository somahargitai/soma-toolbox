import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({}) => {
  const isProduction = process.env.VERCEL_ENV === "production";
  return {
    base: isProduction ? "/toolbox/" : "/", // Use "/toolbox/" only in production
    plugins: [react()],
  };
});
