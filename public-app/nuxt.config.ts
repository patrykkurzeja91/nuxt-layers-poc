// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["../_base", "../admin-app"],
  components: [
    {
      path: "~/admin-app/components",
      pathPrefix: true,
      prefix: "Admin",
    },
    {
      path: "~/components",
      pathPrefix: true,
      prefix: "Public",
    },
  ],
});
