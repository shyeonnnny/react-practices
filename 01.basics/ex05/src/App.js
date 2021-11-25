import React from 'react';

const App = function() {
    // const app = document.createElement('h1');
    // app.textContent = 'Hello World';
    const app =  React.createElement('h1', null, 'Hello World'); // null : 부모없음
    return app;
}

export { App }