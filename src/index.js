import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import Header from "./components/header";
import FavouriteMovies from "./components/favouriteMovies";
import Movie from "./components/singleMovie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <PersistGate persistor={persistor}>
          <Header />
          <Routes>
            <Route path="/" exact element={<App />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/favourites" element={<FavouriteMovies />} />
          </Routes>
        </PersistGate>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
