//包含了 webpack.config.js 和 这个 文件
//开发环境
const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({}, base, {
    mode: 'development',
    entry: {
      example: './example.tsx',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'example.html'
        })
    ],
})