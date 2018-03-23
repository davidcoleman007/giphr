import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import {Header} from './components/Header';

import './App.scss';
import {getTrending} from './thunks/giphy';

const mapStateToProps = (state, ownProps) => {
  return {
    trending: state.results.trending,
    len : state.results.trending.length
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...bindActionCreators({
        getTrending
      }, dispatch
    )
  }
}

class App extends Component {
  componentDidMount() {
    const {getTrending} = this.props;
    getTrending();
  }

  render() {
    const {
      len,
      trending
    } = this.props;

    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          trending: {len} gifs
        </p>
        <ul>
          {
            trending.map(
              (gif) => {
                return (
                  <li><img src={gif.images.fixed_width_small.url} alt={gif.slug}/></li>
                )
              }
            )
          }
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
