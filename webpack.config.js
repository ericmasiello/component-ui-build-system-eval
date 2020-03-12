const { resolve } = require("path");

const config = {
    devtool: "source-map",
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: resolve(__dirname, "./build"),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["babel-loader"],
                exclude: /node_modules/,
                resolve: {
                    extensions: [".js", ".jsx", ".ts", ".tsx"]
                }
            },
            {
                test: /\.(scss|css)$/,
                exclude: /node_modules/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    },
};

module.exports = config;