import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Search as Component } from './Search';

import { toggleHistory } from '../../actions/drawers';
import { search } from '../../thunks/giphy';

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({
      search,
      toggleHistory,
    }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
