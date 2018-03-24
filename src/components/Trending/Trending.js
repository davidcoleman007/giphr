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
      <ul className="trending">{
        trending.map(
          (gif) => {
            return (
              <li>
                <img alt={gif.slug}
                    src={gif.images.fixed_height_small.url}
                />
              </li>
            )
          }
        )
      }</ul>
    );
  }
}