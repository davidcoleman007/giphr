import React from 'react';

import nyanCat from './nyan-cat-79x50.gif';
import search from './search-48x48.gif';

import './header.scss';

export const Header = (props) => {
  return(
    <header className="app-header">
      <div className="title">
        <img src={nyanCat} className="App-logo" alt="logo" />
          <h1>Welcome to Giphr</h1>
          <img src={nyanCat} className="App-logo" alt="logo" />
        </div>
        <div className="search">
          <input className="query-input" placeholder="Enter something to giph it!"/>
          <img src={search} className="App-logo" alt="logo" />
      </div>
    </header>
  );
}