import React, { useState } from 'react';

export default function TitelBar02() {
    useState()
    const onClickHandler = () => {
        console.log('TitleBar02 Clicked');
    }
    return (
        <h1
            onClick = {onClickHandler}
            style={{cursor: 'pointer'}}>
            ex03 - Functional Event Handler (Functional Component)</h1>
    )
}