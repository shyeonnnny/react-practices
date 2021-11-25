const path = require('path');
module.exports = {
    mode: 'development', // 안넣어줄 경우 오류메세지 : Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
    entry: path.resolve('./src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /.css$/i, // . : css로 시작하는 $: css로 끝나는 (i는 뭐지 ?)
            use: ['style-loader', 'css-loader']
        }]
    },
    devServer: {
        // contentBase: path.resolve('public'),
        host: '0.0.0.0', // 0.0.0.0으로하면 어디서든 포트를 띄울수있음
        port: 9999,
        // inline: true,
        liveReload: true,
        hot: false,
        compress: true
    }
}