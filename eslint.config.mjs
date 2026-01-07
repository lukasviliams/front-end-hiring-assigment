// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  files: ["**/*.vue"],
  languageOptions: {
    parserOptions: {
      parser: "@typescript-eslint/parser",
      extraFileExtensions: [".vue"],
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
});
