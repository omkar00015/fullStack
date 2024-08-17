import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
    plugins: {
      react: pluginReact,
      prettier: pluginPrettier
    },
    rules: {
      // JavaScript rules
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "no-console": "warn",
      "eqeqeq": ["error", "always"],
      "semi": ["error", "always"],

      // React-specific rules
      "react/react-in-jsx-scope": "off", // Next.js users may turn this off
      "react/prop-types": "off", // Turn this on if using PropTypes
      "react/jsx-filename-extension": ["warn", { "extensions": [".jsx", ".js"] }],

      // Prettier integration
      "prettier/prettier": [
        "error",
        {
          "endOfLine": "auto",
          "singleQuote": true,
          "trailingComma": "es5"
        }
      ]
    }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    // Ensure Prettier rules are applied
    extends: ["prettier"]
  }
];
