// webpack.config.js
module.exports = (env) => {
  return require(`./webpack/webpack.${env.mode}.js`);
};

// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//   entry: "./src/index.ts",
//   devtool: "inline-source-map",
//   devServer: {
//     static: {
//       directory: path.join(__dirname, "dist"),
//     },
//     watchFiles: ["src/**/*"],
//     open: true,
//     hot: true,
//     liveReload: true,
//     port: 3000,
//   },
//   mode: "development",
//   module: {
//     rules: [
//       {
//         test: /\.ts$/,
//         use: "ts-loader",
//         include: [path.resolve(__dirname, "src")],
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.s[ac]ss$/i,
//         use: ["style-loader", "css-loader", "sass-loader"],
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/i,
//         type: "asset/resource",
//       },
//       {
//         test: /\.html$/i,
//         loader: 'html-loader',
//       }
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: "Build Tool",
//       template: "./src/index.html",
//       filename: "index.html",
//     }),
//   ],
//   resolve: {
//     extensions: [".ts", ".js"],
//   },
//   output: {
//     filename: "[name].bundle.js",
//     path: path.resolve(__dirname, "dist"),
//     clean: true,
//   },
//   optimization: {
//     runtimeChunk: "single",
//   },
// };
