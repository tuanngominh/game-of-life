import React from 'react';
import ReactDOM from 'react-dom';
import Perf from 'react-addons-perf'
import Game from './components/Game';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './App.css';

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

if (process.env.NODE_ENV !== 'production') {
  window.Perf = Perf
}