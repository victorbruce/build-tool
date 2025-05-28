const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: "/.ts$/",
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
        exclude: "/node_modules/",
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
