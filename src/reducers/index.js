import {combineReducers} from 'redux';
import drawers from './drawers';
import results from './results';
import search from './search';

export default combineReducers({
  drawers,
  results,
  search
});
