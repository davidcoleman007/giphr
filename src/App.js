import React, { Component } from 'react';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { Drawers } from './components/Drawers';
import { GifViewerModal } from './components/Modals';
import { Header } from './components/Header';
import { Main } from './components/Main';


import './App.scss';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="App">
          <Header />
          <Main />
          <Drawers />
          <GifViewerModal />
        </div>
      </MuiThemeProvider>
    );
  }
}
