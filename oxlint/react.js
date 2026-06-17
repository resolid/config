import { defineConfig } from "oxlint";

export default defineConfig({
  jsPlugins: [
    {
      name: "react-you-might-not-need-an-effect-js",
      specifier: "eslint-plugin-react-you-might-not-need-an-effect",
    },
  ],
  plugins: ["react", "react-perf", "jsx-a11y"],
  rules: {
    "react/display-name": "error",
    "react/jsx-key": "error",
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-target-blank": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": "error",
    "react/no-unsafe": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-render-return": "error",
    "react/self-closing-comp": "error",
    "react/jsx-boolean-value": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-curly-brace-presence": "warn",
    "react/jsx-no-useless-fragment": "warn",
    "react/prefer-function-component": "error",
    "react/no-unstable-nested-components": "error",
    "react/jsx-no-constructed-context-values": "error",
    "react/no-array-index-key": "error",
    "react/no-clone-element": "error",
    "react/hook-use-state": "error",
    "react/jsx-handler-names": "error",
    "react/only-export-components": [
      "warn",
      {
        allowConstantExport: true,
        allowExportNames: [
          "meta",
          "links",
          "action",
          "handle",
          "headers",
          "clientAction",
          "loader",
          "clientLoader",
          "middleware",
          "clientMiddleware",
          "shouldRevalidate",
          "ErrorBoundary",
          "HydrateFallback",
          "Layout",
        ],
      },
    ],

    "react/rules-of-hooks": "error",
    "react/exhaustive-deps": ["warn", { additionalHooks: "useIsomorphicEffect" }],

    "react/react-compiler": "error",

    // react-you-might-not-need-an-effect-js Recommended
    "react-you-might-not-need-an-effect-js/no-derived-state": "warn",
    "react-you-might-not-need-an-effect-js/no-chain-state-updates": "warn",
    "react-you-might-not-need-an-effect-js/no-event-handler": "warn",
    "react-you-might-not-need-an-effect-js/no-adjust-state-on-prop-change": "warn",
    "react-you-might-not-need-an-effect-js/no-reset-all-state-on-prop-change": "warn",
    "react-you-might-not-need-an-effect-js/no-pass-live-state-to-parent": "warn",
    "react-you-might-not-need-an-effect-js/no-pass-data-to-parent": "warn",
    "react-you-might-not-need-an-effect-js/no-external-store-subscription": "warn",
    "react-you-might-not-need-an-effect-js/no-initialize-state": "warn",
  },
});
