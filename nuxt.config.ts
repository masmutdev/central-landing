// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "nuxt-meta-pixel",
  ],

  app: {
    head: {
      title:
        "Central Course - Situs Resmi Informasi dan Pendaftaran Central Course Kampung Inggris",
      htmlAttrs: {
        lang: "id",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Situs Resmi Informasi dan Pendaftaran Central Course Kampung Inggris.",
        },

        // Open Graph
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Central Course Official" },
        {
          property: "og:title",
          content: "Central Course - Situs Resmi Informasi dan Pendaftaran",
        },
        {
          property: "og:description",
          content:
            "Situs Resmi Informasi dan Pendaftaran Central Course Kampung Inggris.",
        },
        {
          property: "og:url",
          content: "https://centralcourse.id/",
        },
        {
          property: "og:image",
          content: "https://centralcourse.id/img/logo.avif",
        },

        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Central Course - Situs Resmi Informasi dan Pendaftaran",
        },
        {
          name: "twitter:description",
          content:
            "Situs Resmi Informasi dan Pendaftaran Central Course Kampung Inggris.",
        },
        {
          name: "twitter:image",
          content: "https://centralcourse.id/img/logo.avif",
        },
      ],
      link: [
        { rel: "icon", href: "/favicon.ico" },
        {
          rel: "canonical",
          href: "https://centralcourse.id/",
        },
      ],
    },
  },

  site: {
    url: "https://centralcourse.id/",
    name: "Central Course Official",
  },

  image: {
    dir: "public",
    format: ["webp", "avif"],
  },

  runtimeConfig: {
    public: {
      metapixel: {
        default: {
          id: "1466798480876697", // Ganti dengan ID Pixel kamu
          pageView: "/**",
        },
      },
    },
  },
});
