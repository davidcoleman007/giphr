import React, { Component } from 'react';
import { Trending } from '../Trending';
import { Results } from '../Results';

export class Main extends Component {
  render() {
    return (
      <section>
        <Trending />
        <Results />
      </section>
    )
  }
}