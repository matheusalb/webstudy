const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const minicssextractplugin = require('mini-css-extract-plugin')
// vai ser interpretado pelo node
const mcep = require('mini-css-extract-plugin')
const ujp = require('uglifyjs-webpack-plugin')
const ocssap = require('optimize-css-assets-webpack-plugin')

// exporto o objeto que representa toda configuração
// do script do webpack, pode utilizar mais de um arquivo
// development and production, diz o tipo do formato gerado
module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        // pagina que ele vai ficar lendo
        // usar esse servidor para desenvolvimento
        contentBase: "./public",
        port: 9000
    },
    optimization: {
        minimizer: [
            new ujp({
                cache: true,
                parallel: true
            }),
            new ocssap({})
        ]
    },
    plugins: [
        new minicssextractplugin({
            filename: 'estilo.css'
        })
    ],
    module: {
        rules: [{
            // expressao regular que pega .css /\.css$/
            test: /\.(s?[ac]|c)ss$/,
            use: [
                minicssextractplugin.loader,
                // 'style-loader', //  Adiciona CSS a DOM injetando a tag <style>; por manipulação da DOM no arquivo final gerado
                'css-loader', // interpreta @import, @url()...
                'sass-loader'
            ]
        },{
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}

// pra rodar olhar o arquivo package.json
// npm run build e npm start
// pra o servidor ficar manitorando tem que utilizar 
// no "start": "webpack-dev-server", com run nao pega