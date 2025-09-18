// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Félix BERGER - Développeur Full-Stack",
      meta: [
        {
          name: "description",
          content:
            "Développeur full-stack passionné par la création d'applications web innovantes et performantes. Découvrez mes projets, compétences et expériences.",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: [
    "@/assets/css/main.css",

    "@vue-flow/core/dist/style.css",
    "@vue-flow/core/dist/theme-default.css",
    "@vue-flow/controls/dist/style.css",
  ],

  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
    },
  },
  modules: ["@nuxt/ui"],
});
