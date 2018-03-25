import React from 'react';
import StickyHeader from 'react-sticky-header';
import { Search } from '../Search';

import nyanCat from './assets/nyan-cat-79x50.gif';

import 'react-sticky-header/styles.css';
import './header.scss';

export const Header = (props) => {
  return(
    <header className="app-header">
      <div className="title">
        <img src={nyanCat} className="App-logo" alt="logo" />
        <h1>Welcome to Giphr</h1>
        <img src={nyanCat} className="App-logo" alt="logo" />
      </div>
      <StickyHeader
          header={(
            <Search />
          )}
          headerOnly
          offset={80}
      />
    </header>
  );
}