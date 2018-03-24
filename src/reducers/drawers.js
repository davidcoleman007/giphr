
import { TOGGLE_HISTORY } from "../actions/drawers";

export default (state = {
  history: {
    open : false
  }
}, action) => {
  switch(action.type) {
    case TOGGLE_HISTORY:
      return {
        ...state,
        history: {
          open: !state.history.open
        }
      };
    default:
      return state;
  }
};