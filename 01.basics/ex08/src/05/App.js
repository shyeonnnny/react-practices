import React, { Fragment } from 'react';

import Header from './Header';
import Content from './Content';

export default function(){
    render(){
    return(
        <Fragment>
            <Header />
            <Content />
        </Fragment>
    );
    }
}