import {
  SAVE_SEARCH_QUERY,
  SET_CURRENT_QUERY,
} from '../actions/search';

export default (state = {
  currentQuery : '',
  history      : [],
}, action) => {
  switch(action.type) {
    case SAVE_SEARCH_QUERY:
      return {
        ...state,
        history : [
          ...state.history,
          {
            query : action.query,
            gif   : action.gif
          }
        ]
      };
    case SET_CURRENT_QUERY :
      return {
        ...state,
        currentQuery: action.query
      };
    default:
      return state;
  }
};