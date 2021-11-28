import { combineReducers } from "redux";
import { movieReducer } from "./movieReducer";
import { favouriteMovieReducer } from "./favouriteReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favouriteMovies"],
};

const reducers = combineReducers({
  allMovies: movieReducer,
  favouriteMovies: favouriteMovieReducer,
});

export default persistReducer(persistConfig, reducers);
