const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const CSSPlugin = require('mini-css-extract-plugin');


module.exports = {

    entry: {
        src: './src/index.js',
    },

    output: {
        path: path.join(__dirname, './dist/'),
        filename: "build.js"
    },

    plugins: [

        new HTMLPlugin( {
            template: './src/index.html',
        }),

        new CSSPlugin()
    ],

    module: {

        rules: [
            
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                }
            },

            {
                test: /.css$/,
                exclude: /node_modules/,
                use: [ CSSPlugin.loader ,'css-loader']
            }
            
        ]
        
    }



}