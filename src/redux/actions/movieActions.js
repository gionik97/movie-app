import { ActionTypes } from "../constants/action-types";

export const setMovies = (query, page) => {
  return {
    type: ActionTypes.GET_MOVIES_REQUESTED,
    query: query,
    page: page,
  };
};

export const setSingleMovie = (id) => {
  return {
    type: ActionTypes.GET_SINGLE_MOVIE_REQUESTED,
    id: id,
  };
};

export const setCurrentPage = (page) => {
  return {
    type: ActionTypes.UPDATE_CURRENT_PAGE,
    page: page,
  };
};

export const setCurrentQuery = (searchQuery) => {
  return {
    type: ActionTypes.UPDATE_CURRENT_SEARCH_QUERY,
    searchQuery: searchQuery,
  };
};
