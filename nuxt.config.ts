import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    // SCSS file in the project
    "@/assets/css/main.scss",
  ],
  target: "static",
  vue: {
    compilerOptions: {
      isCustomElement: tag => ['james-watt-calling-card'].includes(tag)
    }
  },
  publicRuntimeConfig: {
    UMAMI_WEBSITE_ID: process.env.UMAMI_WEBSITE_ID,
    UMAMI_WEBSITE_URL: process.env.UMAMI_WEBSITE_URL
  },
});
