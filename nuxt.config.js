import tailwindcss from "@tailwindcss/vite";
import Aura from "@primeuix/themes/aura";
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || "kon",
      node_env: process.env.NODE_ENV || "development",
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', 'primeicons/primeicons.css', 'primeflex/primeflex.css'],
  vite: {
    plugins: [
      tailwindcss({
        plugins: [typography, daisyui],
        daisyui: {
          themes: ["light", "dark", "cupcake"],
        },
      }),
    ],
  },
  modules: ["@primevue/nuxt-module"],
  
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '',
        }
      },
    },
  },
});