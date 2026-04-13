import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default [
  js.configs.recommended,
  prettier,
  {
    files: ["src/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": "error",
    },
  },
  {
    files: ["src/**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "no-console": "off",
    },
  },
];