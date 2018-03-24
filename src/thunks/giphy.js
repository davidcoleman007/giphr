import {
  getMoarGifs,
  getTrendingGifs,
  searchGifs,
} from '../api/giphy';

import {
  setGifs,
  setMoarGifs,
  setTrending,
} from '../actions/results';

import {
  saveSearchQuery,
  setCurrentQuery,
} from '../actions/search';

export const getTrending = () => {
  return (dispatch) => {
    return getTrendingGifs(5).then(
      (res) => {
        console.log(res);
        res.json().then(
          (data) => {
            dispatch(setTrending(data.data));
          }
        );
      }
    );
  }
};

export const search = (query) => {
  return (dispatch, getState) => {
    return searchGifs(query).then(
      (res) => {
        res.json().then(
          (data) => {
            const state = getState();
            const matches = state.search.history.find(
              (item) => {
                return (item.query === query);
              }
            );
            if(!matches) {
              dispatch(saveSearchQuery(query,data.data[0]))
            }
            dispatch(setCurrentQuery(query));
            dispatch(setGifs(data.data));
          }
        );
      }
    );
  }
}

export const getMoar = (query, iHazHowMany) => {
  return (dispatch) => {
    return getMoarGifs(query, iHazHowMany).then(
      (res) => {
        res.json().then(
          (data) => {
            dispatch(setMoarGifs(data.data));
          }
        );
      }
    );
  }
}