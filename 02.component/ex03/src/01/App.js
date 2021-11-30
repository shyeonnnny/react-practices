import React from 'react';

export default function () {
    return (
        <h1
            onClick={(e) => {console.log('click!')}}
            style={{
                cursur: 'pointer'
            }}>
            ex03 - Inline Handler</h1>
    );
}