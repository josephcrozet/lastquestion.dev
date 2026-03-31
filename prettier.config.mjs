/** @type {import("prettier").Config & import("prettier-plugin-tailwindcss").PluginOptions} */
export default {
  tailwindStylesheet: "./src/styles/global.css",
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  singleQuote: true,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    {
      files: "*.jsonc",
      options: {
        trailingComma: "none",
      },
    },
  ],
};
