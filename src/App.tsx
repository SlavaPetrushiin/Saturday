import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate() {
        console.log('ComponentDidUpdate');
    }

    state = {
        count: 0
    };
    onCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <button onClick={this.onCount}>inc</button>
                    <h3>count: {this.state.count}</h3>
                </header>
            </div>
        );
    }
}

export default App;
