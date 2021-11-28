import "./App.css";
import React, { useState, useEffect } from "react";
import { Button, CssBaseline, Input } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import {
  setMovies,
  setCurrentPage,
  setCurrentQuery,
} from "./redux/actions/movieActions";
import SearchResults from "./components/searchResults";

import Pagination from "@mui/material/Pagination";

const useStyles = makeStyles((theme) => ({
  input: {
    padding: 15,
    textAlign: "center",
    marginBottom: 20,
    width: "100%",
  },
  btn: {
    width: "50%",
  },
}));

const paginationStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      justifyContent: "center",
      display: "flex",
    },
  },
}));

function App() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const paginationClasses = paginationStyles();
  const movies = useSelector((state) => state.allMovies.movies);
  const currentSearchPage = useSelector((state) => state.allMovies.searchPage);
  const currentSearchQuery = useSelector(
    (state) => state.allMovies.searchQuery
  );
  const [search, setSearch] = useState(currentSearchQuery);
  const [page, setPage] = useState(currentSearchPage);

  const updateSearch = () => {
    dispatch(setMovies(search, page));
    dispatch(setCurrentPage(page));
    dispatch(setCurrentQuery(search));
    setPage(1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(setMovies(search, page));
    dispatch(setCurrentPage(page));
    dispatch(setCurrentQuery(search));
  }, [page]);

  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box
          sx={{
            width: "60%",
            margin: "50px auto",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Input
            placeholder="Search movie by a title"
            className={classes.input}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            variant="contained"
            className={classes.btn}
            onClick={updateSearch}
          >
            Search
          </Button>
        </Box>
        <SearchResults />
        {movies.Search && movies.Search.length >= 10 && (
          <Box
            sx={{
              width: "40%",
              margin: "50px auto",
            }}
          >
            <Pagination
              color="primary"
              count={10}
              page={page}
              onChange={(event, page) => handlePageChange(event, page)}
              className={paginationClasses.root}
            />
          </Box>
        )}
      </Container>
    </>
  );
}

export default App;
