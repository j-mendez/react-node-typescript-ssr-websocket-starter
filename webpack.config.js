const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");

const production = process.env.NODE_ENV === "production";

module.exports = {
  mode: !production ? "development" : "production",
  entry: {
    app: path.join(__dirname, "src/client", "main.ts")
  },
  target: "web",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: "/node_modules/",
        options: {
          configFile: "tsconfig.web.json"
        }
      }
    ]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new webpack.ProvidePlugin({
      "process.env": JSON.stringify(dotenv.config().parsed)
    })
  ]
};
