import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // vite: {
  //   define: {
  //     "process.env.REACT_APP_MAPBOX": process.env.REACT_APP_MAPBOX,
  //   },
  // },
});
