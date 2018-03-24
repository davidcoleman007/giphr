import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { HistoryDrawer as Component } from './HistoryDrawer';

import { toggleHistory } from '../../../actions/drawers';

const mapStateToProps = (state, ownProps) => {
  return {
    open: state.drawers.history.open
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...bindActionCreators({
      toggleHistory
    }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component)