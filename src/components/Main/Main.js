import React, { Component } from 'react';
import { Trending } from '../Trending';
import { Results } from '../Results';

import './Main.scss';

export class Main extends Component {
  render() {
    return (
      <section className="main">
        <Trending />
        <Results />
      </section>
    )
  }
}