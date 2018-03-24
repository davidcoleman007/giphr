export const SET_GIFS      = 'SET_GIFS';
export const SET_MOAR_GIFS = 'SET_MOAR_GIFS';
export const SET_TRENDING  = 'SET_TRENDING';

export const setTrending = (gifs) => {
  return {
    type: SET_TRENDING,
    gifs
  };
};

export const setGifs = (gifs) => {
  return {
    type: SET_GIFS,
    gifs
  };
};

export const setMoarGifs = (gifs) => {
  return {
    type: SET_MOAR_GIFS,
    gifs
  };
};