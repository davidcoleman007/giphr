const GIPHY_API_BASE = 'https://api.giphy.com/v1/gifs';
const GIPHY_API_KEY  = 'xyHxXfz2aPA38bMQ3jChWejRhkysklD2';

export const getTrendingGifs = (limit = 25, rating = 'G') => {
  return fetch(`${GIPHY_API_BASE}/trending?api_key=${GIPHY_API_KEY}&limit=${limit}&rating=${rating}`);
}

export const searchGifs = (q='all the things',rating='G', offset=0, limit=25) => {
  return fetch(`${GIPHY_API_BASE}/search?api_key=${GIPHY_API_KEY}&q=${q}&limit=${limit}&offset=${offset}&rating=${rating}`);
}

export const getMoarGifs = (q='all the things',start=25, rating='G') => {
  return searchGifs(q,rating, start,25);
}