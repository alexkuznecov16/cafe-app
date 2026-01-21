import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  // 1. Конфиг для TSX / JS
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off",
    },
  },

  // 2. Исправленный конфиг для SCSS и CSS
  {
    files: ["**/*.{scss,css}"],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    // ВАЖНО: Мы не используем стандартный парсер ESLint для этих файлов
    languageOptions: {
      parser: {
        // Мы говорим ESLint использовать пустой парсер, чтобы он не искал ошибки JS
        parse: (code) => ({
          type: "Program",
          body: [],
          tokens: [],
          comments: [],
          loc: { start: { line: 1, column: 0 }, end: { line: 1, column: 0 } },
          range: [0, 0],
        }),
      },
    },
    rules: {
      // Весь анализ отдаем плагину Prettier
      "prettier/prettier": ["error", { tabWidth: 2 }],
    },
  },

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),

  eslintConfigPrettier,
]);

export default eslintConfig;
