import React, {Component} from 'react';

import './Trending.scss';

export class Trending extends Component {
  static defaultProps = {
    trending: []
  };

  componentDidMount() {
    const {getTrending} = this.props;
    getTrending();
  }

  render() {
    const {trending} = this.props;
    return (
      <section className="trending">
        <h1>#trending:</h1>
        <ul>{
          trending.map(
            (gif, idx) => {
              return (
                <li key={`trending_${idx}`}>
                  <img alt={gif.slug}
                      src={gif.images.fixed_height_small.url}
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