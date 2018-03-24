import {SAVE_SEARCH_QUERY} from '../actions/search';

export default (state = {
  currentQuery : 'all the things'
}, action) => {
  switch(action.type) {
    case SAVE_SEARCH_QUERY:
      return {
        ...state,
        currentQuery: action.query
      }
    default:
      return state;
  }
};