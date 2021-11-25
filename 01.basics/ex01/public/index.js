const App = function() {
    const app = document.createElement('h1');
    app.textContent = 'Hello World';
    return app;
}

document
    .getElementById('root') // root는 index.html파일에 있음 (10 line)
    .appendChild(App());