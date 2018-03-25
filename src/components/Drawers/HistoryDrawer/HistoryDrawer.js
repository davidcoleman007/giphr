import React, { Component } from 'react';
import autoBind from 'react-autobind';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import {List, ListItem} from 'material-ui/List';


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

  onItemClick(item) {
    const {
      search,
      toggleHistory
    } = this.props;
    return () => {
      search(item.query);
      toggleHistory();
    }
  }

  render() {
    const {history} = this.props;
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
        <List>
            {history.map(
              (item, idx) => {
                return (
                  <ListItem
                      key={`history_${idx}`}
                      leftAvatar={<Avatar src={item.gif.images.fixed_width_small.url} />}
                      onClick={this.onItemClick(item)}
                      primaryText={item.query}
                  />
                );
              }
            )}
        </List>
      </Drawer>
    );
  }
}