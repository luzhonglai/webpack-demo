/*
 * @Description: 
 * @Author: luzhonglai
 * @Date: 2024-03-26 11:17:57
 * @LastEditors: luzhonglai
 * @LastEditTime: 2024-03-26 17:51:51
 * @FilePath: /webpack-demo/webpack.config.js
 */


const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const config = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[hash].js'
  },
  resolve: {
    alias: {
      '@': path .resolve(__dirname, './src'),
    },
    extensions:['.vue','.ts','.js']
  },
  stats: 'errors-only',
  module:{
    rules:[
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.less$/,
        use:['css-loader', 'less-loader','style-loader'],
      },
      // {
      //   test: /\.ts$/,
      //   loader: 'ts-loader',
      //   // options: {
      //   //   configFile: path.resolve(process.cwd(), 'tsconfig.json'),
      //   //   appendTsSuffix: [/\.vue$/]
      //   // },
      // }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({template: './public/index.html'}),
    new VueLoaderPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo:{
        messages: ['项目运行地址----> http://localhost:8080']
      }
    })
    
   ]
}

module.exports = config