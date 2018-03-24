import React, { Component } from 'react';
import autoBind from 'auto-bind';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

export class HistoryDrawer extends Component {
  static defaultProps = {
    open: false
  };

  constructor(props) {
    super(props);
    autoBind(this);
  }

  onRequestChange() {
    const { toggleHistory } = this.props;
    toggleHistory();
  }

  render() {
    return (
      <Drawer docked={false}
          onRequestChange={this.onRequestChange}
          open={this.props.open}
          openSecondary={true}
          width={400}
      >
        <AppBar title="Search History"
            iconElementLeft={
              <IconButton onClick={this.onRequestChange}>
                <NavigationClose />
              </IconButton>
            }
        />
      </Drawer>
    );
  }
}