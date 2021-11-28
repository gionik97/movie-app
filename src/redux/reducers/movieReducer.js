import { ActionTypes } from "../constants/action-types";

const initialState = {
  movies: [],
  singleMovie: [],
  error: null,
  searchPage: 1,
  searchQuery: "",
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_MOVIES_REQUESTED:
      return {
        ...state,
      };
    case ActionTypes.GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.movies,
      };
    case ActionTypes.GET_MOVIES_FAILED:
      return {
        ...state,
        error: action.message,
      };
    case ActionTypes.GET_SINGLE_MOVIE_REQUESTED:
      return {
        ...state,
      };
    case ActionTypes.GET_SINGLE_MOVIE_SUCCESS:
      return {
        ...state,
        singleMovie: action.movies,
      };
    case ActionTypes.GET_SINGLE_MOVIE_FAILED:
      return {
        ...state,
        error: action.message,
      };
    case ActionTypes.UPDATE_CURRENT_PAGE:
      return {
        ...state,
        searchPage: action.page,
      };
    case ActionTypes.UPDATE_CURRENT_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.searchQuery,
      };

    default:
      return state;
  }
};
