import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {randomFirstGeneration} from './lib/utils'
import Board from './components/Board'

class App extends Component {
  render() {
    const boardSize = 10
    const creatures = randomFirstGeneration(boardSize)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Board creatures={creatures} boardSize={boardSize} interval={2} timer={true}/>
      </div>
    );
  }
}

export default App;
