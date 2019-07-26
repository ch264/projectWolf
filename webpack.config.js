const path = require('path');

// we use babel polyfill.
const config = {
    mode: 'development',
    entry: {
        index: ['@babel/polyfill', './src/index.js',],
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.join(__dirname, './dist'),
    },
        devtool: 'inline-source-map',
        devServer: {
        contentBase: path.join(__dirname, './dist'),
        compress: true,
        port: 3000,
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.(woff2|woff|ttf|svg|eot|cur)$/,
            loader: 'file-loader'
        }, {
            test: /\.(css|less)$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
        }, {
            test: /\.(jpg|gif|png|svg)$/,
            use: [
                {
                    loader: 'url-loader'
                }
            ]
        }
        ]
    },
};

module.exports = config;



