import React from 'react';

export default function(){
    return(
        <div>
            <h2>App02</h2>
            <p>JSX Tutorials - 특징2: Single Root node</p>
            {/*
                리액트 컴포넌트는 단일 루트 노드만 렌더링 할 수 있다.
                오류
                <h2>App02</h2>
                <p>JSX Tutorials - 특징2: Single Root node</p>
            */}
            <input type='text' maxLength='10' />
            {/*
                2. Element는 꼭 닫혀야 한다.
                오류) <br> <hr> <input type='text'> <img src=''>
            */}
            <br/>
            <hr/>
            <img src='https://blog.kakaocdn.net/dn/bsjhjO/btqvCfUaDyE/cqTEATkUh5Nm4do3nqq9Ak/img.png'/>
            {/*
                3. 속성 이름은 DOM API 기반이다.
                <div id='box' class='box>...</div>
                document.getElementById('box').className='box'
            */}
            <div id='box' class='box'>
                box 입니다.
            </div>
        </div>
    )
}