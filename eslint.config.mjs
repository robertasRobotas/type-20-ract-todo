import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default {
  parserOptions: {
    ecmaVersion: 2022, // or whatever ECMAScript version you are using
    sourceType: "module", // set to 'module' if you are using ES6 modules
  },
  env: {
    browser: true, // set this to true if you're working in a browser environment
    es6: true, // enable ES6 global variables
    node: true, // set this if your environment includes Node.js
  },
  globals: {
    globals: globals.browser,
  },
  rules: {
    "no-undef": "error", // This will cause ESLint to throw an error for undefined variables
  },
  plugins: [pluginJs.configs.recommended, pluginReactConfig],
};
