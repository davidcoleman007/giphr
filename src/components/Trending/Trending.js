import React, {Component} from 'react';

import './Trending.scss';
import { GifCard } from '../GifCard';

export class Trending extends Component {
  static defaultProps = {
    trending: []
  };

  componentDidMount() {
    const {getTrending} = this.props;
    getTrending();
  }
  onGifClick(gif) {
    const { toggleGifViewer } = this.props;
    return () => {
      toggleGifViewer(gif);
    }
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
                <GifCard gif={gif}
                    key={`trending_${idx}`}
                    onClick={this.onGifClick(gif)}
                    type="fixed_height_small"
                />
              );
            }
          )
        }</ul>
      </section>
    );
  }
}