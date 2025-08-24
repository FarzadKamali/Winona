// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  app:{
    head:{
      title: "Winona",
      link:[
        { rel: 'icon', type: 'image/svg+html', href: '/favicon.svg' }
      ]
    }
  },

  css: ['~/assets/main.css'],
  modules: ["@pinia/nuxt"],
  runtimeConfig: {
    apiKey: process.env.NUXT_API_KEY,
    public: {
      apiUrl: 'https://2gtshonemmlvswaqfcepdjsbqy0rdwth.lambda-url.us-west-2.on.aws'
    }
  }
});
