import {
  getMoarGifs,
  getTrendingGifs,
  searchGifs,
} from '../api/giphy';

import {
  setGifs,
  setMoarGifs,
  setTrending
} from '../actions/results';

import {
  saveSearchQuery,
} from '../actions/search';

export const getTrending = () => {
  return (dispatch) => {
    return getTrendingGifs(5).then(
      (res) => {
        console.log(res);
        res.json().then(
          (data) => {
            console.log(data);
            dispatch(setTrending(data.data));
          }
        );
      }
    );
  }
};

export const search = (query) => {
  return (dispatch) => {
    dispatch(saveSearchQuery(query))
    return searchGifs(query).then(
      (res) => {
        console.log(res);
        res.json().then(
          (data) => {
            console.log(data);
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
        console.log(res);
        res.json().then(
          (data) => {
            console.log(data);
            dispatch(setMoarGifs(data.data));
          }
        );
      }
    );
  }
}