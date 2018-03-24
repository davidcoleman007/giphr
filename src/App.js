import React, { Component } from 'react';

import { Header } from './components/Header';


import './App.scss';
import { Main } from './components/Main';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}
