const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: [path.resolve("./src/index.tsx")],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".d.ts"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            sourceType: "unambiguous",
            plugins: [
              ["@babel/plugin-proposal-decorators", { version: "legacy" }],
            ],
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  corejs: { version: "3", proposals: true },
                  // 1. when use dev mode to compile, set targets to following targets config will make runtime error
                  // 2. when use product mode to compile, set targets to following targets config, everything is OK!
                  // 3. when use dev mode to compile, and remove targets config, also no any error
                  targets: {
                    chrome: "85",
                    safari: "13",
                  },
                  include: ["@babel/plugin-transform-class-properties"],
                },
              ],
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
    }),
  ],
};
