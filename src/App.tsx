import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    componentDidMount(){
        console.log("componentDidMount");
    }

    componentDidUpdate() {
        console.log('ComponentDidUpdate');
    }

    render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              Edit <code>src/App.tsx</code> and save to reload. Hello Slava
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
    );
  }
}

export default App;
