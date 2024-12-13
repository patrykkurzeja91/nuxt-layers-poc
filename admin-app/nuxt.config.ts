// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["../_base"],
  components: [
    {
      path: "./components",
      pathPrefix: true,
      prefix: "Admin",
    },
  ],
});
