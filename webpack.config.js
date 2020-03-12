const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const cssExtract = new MiniCssExtractPlugin();

const config = {
    devtool: 'source-map',
    entry: './src/index.ts',
    output: {
        filename: 'myComponentLib.js',
        path: resolve(__dirname, "./build"),
        library: 'myComponentLib',
        libraryTarget: 'commonjs2',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx']
                }
            },
            {
                test: /\.(scss|css)$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                                context: resolve(__dirname, 'src/components/'),
                            },
                        },
                    },
                    'sass-loader' // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    },
    plugins: [
        cssExtract,
    ],
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
    },
    optimization: {
        splitChunks: false,
        sideEffects: false,
    },
};

module.exports = config;