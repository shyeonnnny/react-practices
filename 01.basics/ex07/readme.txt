ex07: CRA로 만든 Application을 직접 설정해서 만들어 보기

설치:
$ npm i -D webpack webpack-cli webpack-dev-server babel-loader style-loader css-loader sass-loader node-sass @babel/core @babel/cli @babel/preset-env @babel/prset-react
$ npm i react react-dom

설정:
babel: babel.config.json
webpack: webpack.config.js

package.json의 스크립트 추가 하기
"script": {
    "start": "npx webpack serve --progress",
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "npx webpack"
  }