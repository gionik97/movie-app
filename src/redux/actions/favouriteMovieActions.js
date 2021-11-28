import { ActionTypes } from "../constants/action-types";

export const setFavouriteMovie = (favouriteMovie) => {
  return {
    type: ActionTypes.GET_FAVOURITE_MOVIE,
    favouriteMovie: favouriteMovie,
  };
};

export const removeFavouriteMovie = (index) => {
  return {
    type: ActionTypes.REMOVE_FAVOURITE_MOVIE,
    index: index,
  };
};
