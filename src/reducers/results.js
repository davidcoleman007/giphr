import {
  SET_GIFS,
  SET_MOAR_GIFS,
  SET_TRENDING
} from "../actions/results";

export default (state = {
  trending : [],
  gifs     : [],
}, action) => {
  const {gifs} = action;
  switch(action.type) {
    case SET_TRENDING:
      return {
        ...state,
        trending: gifs
      };
    case SET_GIFS:
      return {
        ...state,
        gifs: [
          ...gifs,
        ]
      };
    case SET_MOAR_GIFS:
      return {
        ...state,
        gifs: [
          ...state.gifs,
          ...gifs,
        ]
      };
    default:
      return state;
  }
};