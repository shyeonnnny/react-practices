import React from 'react';

export default function () {
    const clickHandler = (e) => alert('cliked!!!!!!')
    return (
        <h1
            onClick={clickHandler}

            style={{
                cursor: 'pointer'
            }}>
            ex03 - Inline Handler</h1>
    );
}
//            {/*onClick={(e) => {console.log('click!')}}*/}
//            {/* onClick이 두개로 겹치면안됩니다.*/}
//