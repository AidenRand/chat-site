import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import svgr from "vite-plugin-svgr";

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        "@assets": resolve(__dirname, "src/assets"),
      },
    },
    server: {
      host: true, // needed for the Docker Container port mapping to work
      open: true,
      // hmr: {
      //   clientPort: 4004,
      // },
      port: 3000,
    },
    build: {
      outDir: "./build",
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
        },
      },
    },
    plugins: [
      svgr({ svgrOptions: { icon: true } }),
    ],
  };
});