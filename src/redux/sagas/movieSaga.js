import axios from "axios";
import { call, put, takeLatest, all, fork } from "redux-saga/effects";

const getApi = async (query, page) => {
  const apiUrl = `https://omdbapi.com/?apikey=4a42018&s=${query}&page=${page}`;
  return await axios.get(apiUrl);
};

const getSingleMovieApi = async (id) => {
  const apiUrl = `http://www.omdbapi.com/?i=${id}&apikey=4a42018`;
  return await axios.get(apiUrl);
};

export function* fetchMovies({ query, page }) {
  try {
    const movies = yield call(getApi, query, page);
    yield put({ type: "GET_MOVIES_SUCCESS", movies: movies.data });
  } catch (e) {
    yield put({ type: "GET_MOVIES_FAILED", message: e.message });
  }
}

export function* fetchSingleMovie({ id }) {
  try {
    const movie = yield call(getSingleMovieApi, id);
    yield put({ type: "GET_SINGLE_MOVIE_SUCCESS", movies: movie.data });
  } catch (e) {
    yield put({ type: "GET_SINGLE_MOVIE_FAILED", message: e.message });
  }
}

export function* onLoadMovies() {
  yield takeLatest("GET_MOVIES_REQUESTED", fetchMovies);
}

export function* onLoadSingleMovie() {
  yield takeLatest("GET_SINGLE_MOVIE_REQUESTED", fetchSingleMovie);
}

const movieSaga = [fork(onLoadMovies), fork(onLoadSingleMovie)];

export default function* rootSaga() {
  yield all([...movieSaga]);
}
