import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Search as Component } from './Search';

import { toggleHistory } from '../../actions/drawers';

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({
      toggleHistory
    }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
