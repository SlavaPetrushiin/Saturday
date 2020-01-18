import React, {useState} from 'react';
import './App.css';

const AppHook = () => {
    let [value, setCounter] = useState(0);
    let counter = () => {
        setCounter(value + 1)
    };
    return (
        <div className="App">
            <header className="App-header">
                <button onClick={counter}>inc</button>
                <h3>count: {value}</h3>
            </header>
        </div>
    );
};

export default AppHook;
