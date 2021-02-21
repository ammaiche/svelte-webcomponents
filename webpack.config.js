const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  entry: {
    main: ["./src/main.ts"],
  },
  resolve: {
    extensions: [".js", ".ts", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: {
          loader: "svelte-loader",
          options: {
            compilerOptions: {
              dev: true,
            },
            preprocess: sveltePreprocess({ sourceMap: true }),
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devtool: "source-map",
  devServer: {
    hot: true,
  },
};
