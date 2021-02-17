const slsw = require("serverless-webpack");

module.exports = {
  target: "node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-typescript",
            "@babel/preset-react",
            [
              "@babel/preset-env",
              {
                targets: {
                  node: "12.16",
                },
              },
            ],
          ],
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  externals: ["aws-sdk"],
  mode: slsw.lib.options.stage === "prod" ? "production" : "development",
};
