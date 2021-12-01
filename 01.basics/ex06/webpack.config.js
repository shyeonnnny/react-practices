const path = require('path');

module.exports ={
    mode: 'development',
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/images/[hash][ext]'
    },
    module: {
        rules: [{
            test: /\.js$/i,
            exclude: /node_modules/,
            use:['babel-loader']
        }, {
            test: /\.(sa|sc|c)ss$/i,
            use:['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,
            type: 'asset/resource'
        }]
    },
    target:['web','es4'],
    devtool: "eval-source-map", // 번들링이랑 우리 원래소스랑 연결시켜주는? 설정
    devServer: {
        host: '0.0.0.0',
        port: 9999,
        // inline: true
        hot: false,
        compress: true,
        historyApiFallback: true
    }
}