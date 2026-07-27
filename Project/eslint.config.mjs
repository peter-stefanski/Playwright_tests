import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["src/contrib/**", "node_modules/**", "playwright-report/**", "test-results/**"],
  },

  js.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs}"],

    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },

    rules: {
      "no-empty": "error",
      "no-multiple-empty-lines": "warn",
      "no-var": "error",
      "prefer-const": "error",
    },
  },
]);
