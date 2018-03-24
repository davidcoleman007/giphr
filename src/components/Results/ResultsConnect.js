import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

import {getMoar as getMoarGifs} from '../../thunks/giphy';

import { Results as Component} from './Results';

const mapStateToProps = (state, ownProps) => {
  return {
    results : state.results.gifs,
    query   : state.search.currentQuery
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...bindActionCreators({
        getMoarGifs
      }, dispatch
    )
  }
};

const ConnectedResults = connect(mapStateToProps, mapDispatchToProps)(Component)

export default ConnectedResults;
