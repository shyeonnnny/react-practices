ex08: JSX Tutorials

01. 특징1: HTML과 차이점
02. 특징2: Single Root node
03. 함수 컴포넌트 만들기
04. Pure React(React API) 컴포넌트 작성하기
05. 클래스 컴포넌트 만들기
06. 특징3: JSX 표현식 표기법
07. 특징4: 공백(Blank Space)
08. Dynamic HTML Rendering
09. Comment


설치:
$ npm i -D webpack webpack-cli webpack-dev-server babel-loader style-loader css-loader sass-loader node-sass @babel/core @babel/cli @babel/preset-env @babel/prset-react
$ npm i react react-dom

설정:
babel: babel.config.json
webpack: webpack.config.js

package.json의 스크립트 추가 하기
"scripts": {
    "debug": "npx webpack serve --progress --model development --env",
    "build": "npx webpack --mode production"
  }

실행
npm run debug src={01|02|03|04|....}