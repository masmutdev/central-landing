// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss", "@nuxt/image"],
  image: {
    // folder public
    dir: "public",
    // optional: aktifkan format modern
    format: ["webp", "avif"],
  },
});
