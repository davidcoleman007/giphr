export const SET_TRENDING = 'SET_TRENDING';

export const setTrending = (gifs) => {
  return {
    type: SET_TRENDING,
    gifs
  };
};