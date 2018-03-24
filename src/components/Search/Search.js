import React, { Component } from 'react';
import autoBind from 'auto-bind';

import search from './search-48x48.gif';
import historyBurger from './history-burger.png';

import './Search.scss';

export class Search extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      query : ''
    };
  }

  onClickSearch(event) {
    const { search } = this.props;
    search(this.state.query);
  }

  onClickHistory(event) {
    const { toggleHistory } = this.props;
    toggleHistory();
  }

  onSearchChange(event) {
    this.setState({
      query: event.target.value
    });
  }

  onKeyDown(event) {
    if(event.keyCode === 13) {
      event.preventDefault();
      this.onClickSearch();
    }
  }

  render() {
    const { query } = this.state;
    return (
      <div className="search">
        <p/>
        <input className="query-input"
            onChange={this.onSearchChange}
            onKeyDown={this.onKeyDown}
            placeholder="Get Giphy wit it!"
            value={query}
        />
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