import React, {Component} from 'react';
import autoBind from 'auto-bind';

import tenor from './tenor-cropped-trans-sm.gif';

import './Results.scss';

const bgColors = [
  'antiqueWhite',
  'aquamarine',
  'Lavender',
  'LightCoral',
  'LightSalmon',
  'OliveDrab',
  'PaleVioletRed',
  'Pink',
  'Plum',
];

export class Results extends Component {
  static defaultProps = {
    results: []
  };

  constructor(props) {
    super(props);
    autoBind(this);
  }

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }

  trackScrolling() {
    const { getMoarGifs, query, results:{length:numResults} } = this.props;
    const wrappedElement = document.getElementById('results');
    if (this.isBottom(wrappedElement)) {
      console.log('results bottom reached');
      getMoarGifs(query,numResults);
    }
  };

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

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
              const itemStyle = {
                backgroundColor: bgColors[(Math.random()*bgColors.length)>>0]
              };
              return (
                <li style={itemStyle} key={`result_${idx}`}>
                  <img alt={gif.slug}
                      src={gif.images.fixed_width.url}
                  />
                </li>
              )
            }
          )
        }</ul>
      </section>
    );
  }
}