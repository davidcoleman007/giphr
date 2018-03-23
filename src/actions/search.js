export const NEW_SEARCH = 'NEW_SEARCH';

export const newSearch = (query) => {
    return {
        type : NEW_SEARCH,
        query
    };
};