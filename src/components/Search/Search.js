import React, { Component } from 'react';
import autoBind from 'auto-bind';

import search from './search-48x48.gif';
import historyBurger from './history-burger.png';

import './Search.scss';

export class Search extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  onClickSearch(event) {

  }

  onClickHistory(event) {
    const { toggleHistory } = this.props;
    toggleHistory();
  }

  render() {
    return (
      <div className="search">
        <p/>
        <input className="query-input" placeholder="Enter something to giph it!"/>
        <img alt="search"
            className="search-icon"
            onClick={this.onClickSearch}
            src={search}
            title="I can haz giphs?"
        />
        <p/>
        <img alt="history"
            className="history-icon"
            onClick={this.onClickHistory}
            src={historyBurger}
            title="I haz historiez"
        />
      </div>
    );
  }
}