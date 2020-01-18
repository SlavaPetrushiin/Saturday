import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AppHook from "./AppHook";

const rerenderApp = () => {
    age++;
    ReactDOM.render(
        <>
            {/*<App/>*/}
            <AppHook age={age}/>
        </>
        , document.getElementById('root'));
};
let age = 18;
rerenderApp();

setInterval(rerenderApp, 5000);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
