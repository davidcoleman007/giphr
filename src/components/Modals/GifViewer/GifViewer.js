import React, { Component } from 'react';
import autoBind from 'react-autobind';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import './GifViewer.scss';

export class GifViewer extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      image:null
    };
  }

  onRequestClose() {
    const { toggleGifViewer } = this.props;
    toggleGifViewer(null);
    this.setState({
      image:null
    });
  }

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.onRequestClose}
      />
    ];
    const {
      gif,
      open
    } = this.props;
    const { image } = this.state;
    let url='';
    let title='';
    let username='';
    if(gif) {
      title    = gif.title;
      url      = gif.images.original.url;
      username = (
        gif.user
        ? gif.user.display_name
        : gif.source
      );
    }
    if(!image) {
      const img = new Image();
      img.onload = () => {
        if(this.props.open) {
          this.setState({
            image: <img src={url} alt={gif.slug}/>
          });
        }
      };
      img.src = url;
    }
    return (
      <Dialog
        actions={actions}
        className="gif-viewer-dialog"
        modal={true}
        onRequestClose={this.onRequestClose}
        open={open}
        title={`${title} by ${username}`}
      >
        {image}
      </Dialog>
    )
  }
}