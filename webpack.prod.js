const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
//const { GenerateSW } = require("workbox-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  /*
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // replace "style-loader"
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    }),
    new GenerateSW(),
  ],
	*/
});
