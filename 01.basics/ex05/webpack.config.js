const path = require('path');
module.exports = {
    mode: 'development', // 안넣어줄 경우 오류메세지 : Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
    entry: path.resolve('./src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/images/[hash][ext]' // public/assets/images로 옮겨라
                                                          // [hash] : 사진 url을 만들어줌
                                                          // [ext] : 확장자 만들어줌
    },
    module: {
        rules: [{
            test: /.(sa|sc|c)ss$/i, // . : css로 시작하는 $: css로 끝나는 (i는 뭐지 ?) // i : 대소문자 무시
                                                                                      // g : 글로벌
            use: ['style-loader', 'css-loader', 'sass-loader']  // 순서 중요 !
        },{
            test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i, // e? : e가 있어도되고 없어도됨
            type: 'asset/resource'
        }]
    },
    devtool: "eval-source-map",
    devServer: {
        // contentBase: path.resolve('public'),
        host: '0.0.0.0', // 0.0.0.0으로하면 어디서든 포트를 띄울수있음
        port: 9999,
        // inline: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }
}