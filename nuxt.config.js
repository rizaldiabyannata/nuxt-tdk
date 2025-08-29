import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || "http://localhost:5000/api",
      node_env: process.env.NODE_ENV || "development",
    },
  },

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  modules: [
    "@primevue/nuxt-module",
    "@nuxtjs/tailwindcss"
  ],
  
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