// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // Keys within public are also exposed client-side
    public: {
      UMAMI_WEBSITE_ID: process.env.UMAMI_WEBSITE_ID,
      UMAMI_WEBSITE_URL: process.env.UMAMI_WEBSITE_URL
    }
  },
  css: [
    "@/assets/css/main.css"
  ],
  vue: {
    compilerOptions: {
      isCustomElement: tag => ["james-watt-calling-card"].includes(tag)
    }
  }
});
