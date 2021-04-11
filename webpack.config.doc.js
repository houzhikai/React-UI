//生产环境
const base = require('./webpack.config')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({}, base, {
    mode: 'production',
    entry: {
        ...base.entry,              //引用之前 base 的 entry
        example: './example.tsx',
    },
    output: {
        path: path.resolve(__dirname, 'doc'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'example.html',
            filename: 'example.html'        //原来的 名字就叫 example.html
        })
    ],
})