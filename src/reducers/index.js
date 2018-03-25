import {combineReducers} from 'redux';
import drawers from './drawers';
import modals from './modals';
import results from './results';
import search from './search';

export default combineReducers({
  drawers,
  modals,
  results,
  search
});
