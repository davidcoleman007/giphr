import React, {Component} from 'react';
import autoBind from 'react-autobind';

import { GifCard } from '../GifCard';

import tenor from './assets/tenor-cropped-trans-sm.gif';

import './Results.scss';

export class Results extends Component {
  static defaultProps = {
    results: []
  };

  constructor(props) {
    super(props);
    autoBind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  onCardClick(gif) {
    const { toggleGifViewer } = this.props;
    return () => {
      toggleGifViewer(gif);
    }
  }
  trackScrolling() {
    const { getMoarGifs, query, results:{length:numResults} } = this.props;
    const wrappedElement = document.getElementById('results');
    if (this.isBottom(wrappedElement)) {
      console.log('results bottom reached');
      getMoarGifs(query,numResults);
    }
  };

  render() {
    const {query,results} = this.props;
    const flipImageStyle = {
      transform:'scaleX(-1)'
    };

    return (
      <section className="results">
        {query &&
          <h1>
            <img src={tenor} alt="tenor"/>
            {query}
            <img src={tenor} style={flipImageStyle} alt="tenor"/>
          </h1>
        }
        <ul id="results" className="list">{
          results.map(
            (gif, idx) => {
              return (<GifCard gif={gif} key={`result_${idx}`} onClick={this.onCardClick(gif)}/>);
            }
          )
        }</ul>
      </section>
    );
  }
}