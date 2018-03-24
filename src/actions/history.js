export const SAVE_SEARCH_QUERY = 'SAVE_SEARCH_QUERY';

export const saveSearchQuery = (query) => {
  return {
    type : SAVE_SEARCH_QUERY,
    query
  }
}
