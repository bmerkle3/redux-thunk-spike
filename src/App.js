import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = { count: 0 }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          This is the new app <code>src/App.js</code> and save to reload.
        </p>

        <h1>{this.state.count}</h1>
        <button onClick={ () => this.setState({ count: this.state.count + 2 }) }>Count Up</button>
        <button onClick={ () => this.setState({ count: this.state.count - 2 }) }>Count Down</button>
        <button onClick={ () => this.setState({ count: 0 })}>Clear Count</button>
      </div>
    );
  }
}

export default App;

