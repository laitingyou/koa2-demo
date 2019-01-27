const webpack = require('webpack')
const path = require('path');
module.exports = {
    mode: 'development',
    entry: './resource/source/App.js',
    output: {
        path: path.resolve(__dirname, "./resource/dist"),
        filename: "app.js",
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        },
                    },
                    "sass-loader"
                ]
            }
        ]
    },
    devServer: {
        proxy: { // proxy URLs to backend development server
            // '/api': 'http://localhost:3000'
        },
        host:'localhost',
        port: 3333,
        // open:true,
        index: 'index.html',
        contentBase: path.join(__dirname, './resource/source'), // boolean | string | array, static file location
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: true, // only errors & warns on hot reload
        // ...
    },
}