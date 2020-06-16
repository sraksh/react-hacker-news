const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node", // Server side. Not for client browser
  entry: "./server/index.js",
  output: {
    filename: "s-bundle.js",
    path: path.resolve(__dirname, "../build"),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
        options: {
          presets: [
            "@babel/react",
            [
              "@babel/env",
              {
                targets: {
                  esmodules: true,
                },
              },
            ],
          ],
        },
      },
      {
        test: /\.css$/,
        loader: ["css-loader"],
      },
    ],
  },
  externals: [webpackNodeExternals()],
};
