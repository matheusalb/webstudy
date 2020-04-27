const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

const MinifyHtmlWebpackPlugin = require('minify-html-webpack-plugin')
// O MEU É ESSE SPA
// separar o arquivo css do js
const MiniCSSExtractPlugin = require ('mini-css-extract-plugin')

module.exports =  {
    mode: 'development',
    entry: './src/main.js',
    output: {
        // globalObject: "this",
        filename: 'index.js',
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        // pagina que ele vai ficar lendo
        // usar esse servidor para desenvolvimento
        contentBase: "./dist",
        port: 9000
    },
    optimization: {
        minimizer: [
            new UglifyJSWebpackPlugin({
                cache: false,
                parallel: true
            }),
            new OptimizeCSSAssetsWebpackPlugin({})
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: 'src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename:'paginas/inicio.html',
            template: 'src/paginas/inicio.html'
        }),
        new HtmlWebpackPlugin({
            filename:'paginas/cursos.html',
            template: 'src/paginas/cursos.html'
        }),
        new HtmlWebpackPlugin({
            filename:'paginas/suporte.html',
            template: 'src/paginas/suporte.html'
        }),
        new HtmlWebpackPlugin({
            filename:'paginas/sobre.html',
            template: 'src/paginas/sobre.html'
        })
    ],
    module: {
        rules: [{
            test: /\.(s?[ac]|c)ss$/,
            use: [
                MiniCSSExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }, {
           test: /\.(jpg|png|gif)$/,
           use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'imgs/',
                    publicPath: 'imgs/'
                }
            }
           ] 
        },
        {
            test: /\.html$/,
            exclude: [/node_modules/],
            use: ['html-loader'],
        },
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
        },{
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
                // se nao tiver style ele cria com oq for criado com ele!!!! se nao tiver link ele cria tb
            }]
        }]
    }
}