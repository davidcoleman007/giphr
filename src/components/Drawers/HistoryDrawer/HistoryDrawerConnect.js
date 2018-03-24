import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { HistoryDrawer as Component } from './HistoryDrawer';

import { toggleHistory } from '../../../actions/drawers';

import { search } from '../../../thunks/giphy';

const mapStateToProps = (state, ownProps) => {
  return {
    open    : state.drawers.history.open,
    history : state.search.history,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...bindActionCreators({
      search,
      toggleHistory
    }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component)