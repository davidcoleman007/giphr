import { TOGGLE_GIF_VIEWER } from "../actions/modals";

export default (state = {
  gifViewer: {
    open : false,
    gif  : undefined
  }
}, action) => {
  switch(action.type) {
    case TOGGLE_GIF_VIEWER:
      return {
        ...state,
        gifViewer: {
          open : !state.gifViewer.open,
          gif  : action.gif,
        }
      };
    default:
      return state;
  }
};