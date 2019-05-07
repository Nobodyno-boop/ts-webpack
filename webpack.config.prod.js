const path = require("path");
const pkg = require("./package.json");
const name  = pkg["name"]+"-"+pkg["version"]+'.js';


module.exports = {
    entry: "./src/index.ts",
    mode: 'production',
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
        filename: name,
        path: path.resolve(__dirname, "dist")
    }

};