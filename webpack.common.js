const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        entry: './app/index.jsx',
    },
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(css|scss)/,
            use: ExtractTextPlugin.extract('css-loader!sass-loader')
        }, {
            test: /\.(woff|woff2|ttf|eot)(\?\S*)?$/,
            use: ['file-loader?name=[name].[ext]&outputPath=fonts/', ]
        }, {
            test: /\.(png|svg|jpe?g|gif)/,
            use: [
                'file-loader?name=[name].[ext]&outputPath=images/',

                {
                    loader: 'image-webpack-loader',
                    options: {
                        gifsicle: {
                            interlaced: false,
                        },
                        optipng: {
                            optimizationLevel: 4,
                        },
                        pngquant: {
                            quality: '80-90',
                            speed: 4
                        },
                        mozjpeg: {
                            progressive: true,
                            quality: 75
                        },
                        // Specifying webp here will create a WEBP version of your JPG/PNG images
                        webp: {
                            quality: 75
                        }
                    }
                }
            ]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin('css/main.css', {
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: 'app/index.html',
            title: 'Reacjt Redux Blog',
            inject: 'body'
        })
    ]
};