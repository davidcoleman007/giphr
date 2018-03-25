import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { GifViewer as Component } from './GifViewer';

import {
  toggleGifViewer
} from '../../../actions/modals';

function mapStateToProps(state, ownProps) {
  return {
    open : state.modals.gifViewer.open,
    gif  : state.modals.gifViewer.gif,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({
      toggleGifViewer
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
