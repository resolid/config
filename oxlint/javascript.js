import { defineConfig } from "oxlint";

export default defineConfig({
  categories: {
    correctness: "error",
  },
  env: {
    builtin: true,
    es2022: true,
  },
  ignorePatterns: [
    "**/build",
    "**/coverage",
    "**/dist",
    "**/.netlify",
    "**/.react-router",
    "**/.resolid",
    "**/.turbo",
    "**/.vercel",
    "**/.vite-inspect",
  ],
  plugins: ["eslint", "import", "oxc", "promise", "unicorn"],
  rules: {
    curly: "warn",
    "guard-for-in": "warn",
    "logical-assignment-operators": "error",
    "object-shorthand": "error",

    "no-case-declarations": "error",
    "no-empty": "error",
    "no-fallthrough": "error",
    "no-prototype-builtins": "error",
    "no-regex-spaces": "error",
    "no-unexpected-multiline": "error",
    "no-var": "error",
    "no-array-constructor": "error",
    "no-useless-call": "error",
    "no-useless-assignment": "error",
    "no-await-in-loop": "error",
    "no-template-curly-in-string": "error",

    "prefer-const": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "warn",
    "prefer-destructuring": "warn",
    "prefer-object-spread": "warn",
    "prefer-exponentiation-operator": "warn",
    "prefer-numeric-literals": "warn",
    "prefer-named-capture-group": "error",
    "prefer-regex-literals": "error",

    "import/export": "error",
    "import/named": "error",
    "import/no-named-as-default": "warn",
    "import/no-named-as-default-member": "warn",
    "import/no-duplicates": "warn",

    "unicorn/no-useless-iterator-to-array": "error",
    "unicorn/prefer-import-meta-properties": "error",
    "unicorn/prefer-module": "error",
    "unicorn/prefer-ternary": "error",
    "unicorn/switch-case-break-position": "error",

    "oxc/no-accumulating-spread": "error",
    "oxc/no-map-spread": "error",
  },
});
