import React, { Component, Fragment } from 'react';

import Clock from './Clock';

export default function(){
    return(
        <Fragment>
            <p>{`특징3: JSX 표현식 표기법 {expression}과 문제점`}</p>
            <Clock />
        </Fragment>
    )
}