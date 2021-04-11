//生产环境
const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({}, base, {
    mode: 'production',
    entry: {
        ...base.entry,              //引用之前 base 的 entry
        example: './example.tsx',
    },
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React',
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'example.html',
            filename: 'example.html'        //原来的 名字就叫 example.html
        })
    ],
})