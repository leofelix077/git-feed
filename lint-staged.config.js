// lint-staged.config.js
module.exports = {
  "./client/**/*.js": (filenames) => [
    `yarn --cwd client lint-staged:eslint ${filenames.join(" ")}`,
    `yarn --cwd client lint-staged:prettier ${filenames.join(" ")}`,
  ],
  "./client/**/*.ts?(x)": (filenames) => [
    `yarn --cwd client lint-staged:eslint ${filenames.join(" ")}`,
    `yarn --cwd client lint-staged:prettier ${filenames.join(" ")}`,
    "yarn --cwd client lint:tsc",
  ],
};
