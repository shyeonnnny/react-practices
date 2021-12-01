import React from 'react';

export default function(){
    return(
        <div>
            <h2>App01</h2>
            <p>JSX Tutorials - 특징1: HTML과 차이점</p>
            {/*
                1. 속성은 Camel Case
            */}
            <input type='text' maxLength='10' />
            {/*
                2. Element는 꼭 닫혀야 한다.
                오류) <br> <hr> <input type='text'> <img src=''>
            */}
            <br/>
            <hr/>
            {
                //바깥 괄호는 javascript코드로 해석하라는 토큰
                //안쪽 괄호는 객체를 의미하는 토큰
            }
            <img style={{width:'500px'}} src='data:image/png;base64,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'/>
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