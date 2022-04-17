const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, "src/index.js"),
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        filename: "[name][contenthash].js",
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: "Restaurant App",
            filename: "index.html",
            template: "src/template.html",
        }),
    ],
};
