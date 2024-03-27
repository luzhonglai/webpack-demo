/*
 * @Description:
 * @Author: luzhonglai
 * @Date: 2024-03-26 11:17:57
 * @LastEditors: luzhonglai
 * @LastEditTime: 2024-03-27 17:14:00
 * @FilePath: /webpack-demo/webpack.config.js
 */

const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader/dist/index");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const config = {
  mode: "production",
  entry: "./src/main.ts",
  // 出口
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[hash].js",
  },
  // 配置别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".js", ".json", ".ts", ".tsx"], //识别后缀
  },
  stats: "errors-only", // 错误日志
  module: {
    rules: [
      {
        test: /\.vue$/, //解析vue 模板
        use: "vue-loader",
      },
      {
        test: /\.less$/, //解析 less
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.css$/, //解析css
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.ts$/, //解析ts
        loader: "ts-loader",
        options: {
          configFile: path.resolve(process.cwd(), "tsconfig.json"),
          appendTsSuffixTo: [/\.vue$/],
        },
      },
    ],
  },
  // 运行配置
  devServer: {
    port: 8080,
    hot: true,
    open: true,
  },
  plugins: [
    new CleanWebpackPlugin(), // 打包清洌dist
    new htmlWebpackPlugin({ template: "./public/index.html" }),
    new VueLoaderPlugin(), // 解析vue
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ["项目运行地址----> http://localhost:8080"],
      },
    }),
  ],
  // 排除打包插件
  externals: {
    vue: 'Vue'
  }
};

module.exports = config;
