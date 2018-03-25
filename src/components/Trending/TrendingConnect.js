import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

import { toggleGifViewer } from '../../actions/modals';

import {getTrending} from '../../thunks/giphy';

import { Trending as Component} from './Trending';

const mapStateToProps = (state, ownProps) => {
  return {
    trending: state.results.trending,
    len : state.results.trending.length
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...bindActionCreators({
        getTrending,
        toggleGifViewer,
      }, dispatch
    )
  }
};

const Trending = connect(mapStateToProps, mapDispatchToProps)(Component)

export default Trending;
