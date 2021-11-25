ex04: 애플리케이션 번들링(bundling)

1. webpack은 작게 분리된 많은 애플리케이션 모듈(js, css, images, font)들의 의존성을 분석해서 하나의 js 파일로 묶어주는 도구
2. 하나의 JS 파일을 번들(bundle)이라하고 묶는 작업을 번들링(bundling)이라고 한다.
3. 번들링은 단순히 모듈들을 하나의 파일로 묶는 작업만을 의미하지 않는다.
4. 빌드 작업
    1) linting(ESLint, 문법체크) 작업
    2) document 작업(JDoc) 작업
    3) test(Mocha, Jest) 작업
    4) 난독화/압축(Uglyfy) 작업
    5) 번들링
5. 자바스크립트 뿐만 아니라 다양한 에셋(images, css, font) 들도 모듈로 취급을 한다.
6. 설치
    $ npm i -D webpack webpack-cli
    $ npm .\node_modules\.bin\webpack --version
    $ npx webpack --version

    $ npx webpack ./src/index.js 
        dist 디렉토리에 main.js파일이 생기는데 이 파일을 index.htlm파일과 같은 위치에 옮기면
        index.html파일에서 
        <script type='module' src='index.js'></script>
        <script type='module' src='App.js'></script> 부분을 다 지우고
        <script src='main.js'></script>로 바꿔주면 됨
        (index.js를 의존성 분석해서 하나의 번들링으로 바꿔라)
        웹팩은 ES6 모듈시스템을 지원안해서 package.json에서 type부분에 module을 적어주면안됨 적어주면 웹팩이 실행이 안됨(앞 예제에서는 적어주면 실행됨)
            - 실행하려면 dev-server.js파일을 dev-server.mjs라고 변경해주고 package.json에서 start부분도 mjs로 바꿔줌

        package.json에서 build를 추가해주었는데 build는 기본 스테이지가 아니라서 start처럼 바로 npm start해주면 안되고 npm run build라고 해줘야함 (기본스테이지아니면 run 붙여줘야함)