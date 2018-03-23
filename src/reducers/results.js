import { SET_TRENDING } from "../actions/results";

export default (state = {
  trending: []
}, action) => {
  switch(action.type) {
    case SET_TRENDING:
      const {gifs} = action;
      return {
        ...state,
        trending: gifs
      };
    default:
      return state;
  }
};