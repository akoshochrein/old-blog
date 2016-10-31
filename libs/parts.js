const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack-plugin');


exports.devServer = function (options) {
    return {
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            stats: 'errors-only',
            host: options.host,
            port: options.port
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin({
                multistep: true
            })
        ]
    }
};

exports.minify = function () {
    return {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                comments: false,
                compress: {
                    warnings: false
                },
                mangle: {
                    except: ['$', 'webpackJsonp'],
                    screw_ie8: true,
                    keep_fnames: true
                }
            })
        ]
    };
};

exports.setFreeVariable = function (key, value) {
    const env = {};
    env[key] = JSON.stringify(value);

    return {
        plugins: [
            new webpack.DefinePlugin(env)
        ]
    };
};

exports.extractBundle = function (options) {
    const entry = {};
    entry[options.name] = options.entries;

    return {
        entry: entry,
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                names: [options.name, 'manifest']
            })
        ]
    };
};

exports.clean = function (path) {
    return {
        plugins: [
            new CleanWebpackPlugin([path], {
                root: process.cwd()
            })
        ]
    }
};

exports.extractCSS = function (paths) {
    return {
        module: {
            loaders: [
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract(['css', 'sass']),
                    include: paths
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin('[name].[chunkhash].css')
        ]
    };
};

exports.purifyCSS = function (paths) {
    return {
        plugins: [
            new PurifyCSSPlugin({
                basePath: process.cwd(),
                paths: paths
            })
        ]
    };
};

exports.setupSASS = function (paths) {
    return {
        module: {
            loaders: [
                {
                    test: /\.scss$/,
                    loaders: ['style', 'css', 'sass'],
                    include: paths
                }
            ]
        }
    };
};

exports.fileLoader = function (paths) {
    return {
        module: {
            loaders: [
                {
                    test: /\.(jpg|png)$/,
                    loaders: [
                        'file?name=[path][name].[hash].[ext]',
                        'image-webpack?bypassOnDebug&optimizationLevel=10&interlaced=false'
                    ],
                    include: paths
                }
            ]
        }
    };
};

exports.svgLoader = function (paths) {
    return {
        module: {
            loaders: [
                {
                    test: /\.svg$/,
                    loaders: [
                        'file',
                        'svgo-loader'
                    ],
                    include: paths
                }
            ]
        }
    };
};