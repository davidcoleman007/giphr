export const SAVE_SEARCH_QUERY = 'SAVE_SEARCH_QUERY';
export const SET_CURRENT_QUERY = 'SET_CURRENT_QUERY';

export const saveSearchQuery = (query, gif) => {
  return {
    type : SAVE_SEARCH_QUERY,
    query,
    gif
  }
}

export const setCurrentQuery = (query) => {
  return {
    type : SET_CURRENT_QUERY,
    query,
  }
}
