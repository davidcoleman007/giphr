import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

import { Results as Component} from './Results';

import { toggleGifViewer } from '../../actions/modals';

import {getMoar as getMoarGifs} from '../../thunks/giphy';

const mapStateToProps = (state, ownProps) => {
  return {
    results : state.results.gifs,
    query   : state.search.currentQuery
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...bindActionCreators({
        getMoarGifs,
        toggleGifViewer
      }, dispatch
    )
  }
};

const ConnectedResults = connect(mapStateToProps, mapDispatchToProps)(Component)

export default ConnectedResults;
