const GIPHY_API_BASE = 'https://api.giphy.com/v1/gifs';
const GIPHY_API_KEY  = 'xyHxXfz2aPA38bMQ3jChWejRhkysklD2';

export const getTrendingGifs = (limit = 25, rating = 'G') => {
  return fetch(`${GIPHY_API_BASE}/trending?api_key=${GIPHY_API_KEY}&limit=${limit}&rating=${rating}`);
}