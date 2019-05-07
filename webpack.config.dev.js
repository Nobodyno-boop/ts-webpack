const path = require("path");




module.exports = {
    entry: "./src/index.ts",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader",
                exclude: "/node_modules/"
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: path.resolve(__dirname),
        compress: true,
        port: 9000,
        watchContentBase: true,
        hot: true
    },
    plugins: [
    ]

};