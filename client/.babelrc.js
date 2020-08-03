module.exports = {
  presets: [
    "@babel/preset-typescript",
    "@babel/preset-env",
    "@babel/preset-react",
  ],
  plugins: [
    [
      "@babel/plugin-proposal-object-rest-spread",
      {
        useBuiltIns: true,
      },
    ],
  ],
  env: {
    test: {
      presets: [
        "@babel/preset-env",
        "@babel/preset-typescript",
        "@babel/preset-react",
      ],
      plugins: ["transform-export-extensions"],
      only: ["./**/*.js", "node_modules/jest-runtime"],
    },
  },
};
