import { ActionTypes } from "../constants/action-types";

const initialState = {
  favouriteMovies: [],
};

export const favouriteMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_FAVOURITE_MOVIE:
      return {
        ...state,
        favouriteMovies: [...state.favouriteMovies, action.favouriteMovie],
      };
    case ActionTypes.REMOVE_FAVOURITE_MOVIE:
      let a = [...state.favouriteMovies.slice(0, action.index)];
      let b = [...state.favouriteMovies.slice(action.index + 1)];
      return {
        ...state,
        favouriteMovies: a.concat(b),
      };

    default:
      return state;
  }
};
