import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { setSingleMovie } from "../redux/actions/movieActions";
import { useSelector, useDispatch } from "react-redux";
import { setFavouriteMovie } from "../redux/actions/favouriteMovieActions";
import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";

function Movie() {
  const dispatch = useDispatch();
  const singleMovie = useSelector((state) => state.allMovies.singleMovie);
  const favouriteMovies = useSelector(
    (state) => state.favouriteMovies.favouriteMovies
  );
  const [response, setResponse] = useState("");
  const { id } = useParams();
  useEffect(() => {
    dispatch(setSingleMovie(id));
  }, []);

  const handleAddToFavourites = (addedFavouriteMovie) => {
    let isFavoritesEmpty = !favouriteMovies.length;
    if (isFavoritesEmpty) {
      dispatch(setFavouriteMovie(addedFavouriteMovie));
      setResponse("Movie was saved on your profile");
      return;
    }
    let isFavorited = false;
    favouriteMovies.map((item) => {
      if (item.imdbID === addedFavouriteMovie.imdbID) {
        isFavorited = true;
      }
    });
    if (isFavorited) {
      setResponse("This movie was already added to you list");
      const timer = setTimeout(() => {
        setResponse("");
      }, 1000);
      return;
    } else {
      dispatch(setFavouriteMovie(addedFavouriteMovie));
      setResponse("Movie was saved on your profile");
    }
  };

  return (
    <div>
      <CssBaseline />
      <Container>
        <Grid item>
          <Box
            sx={{
              display: "flex",
              marginTop: "40px",
            }}
          >
            <img
              src={singleMovie.Poster}
              alt={singleMovie.Title}
              loading="lazy"
            />
            <Box
              sx={{
                marginLeft: "50px",
              }}
            >
              <Typography gutterBottom variant="h3" component="div">
                <Box component="span" color="#1976d2">
                  Title:
                </Box>
                {singleMovie.Title}
                <StarIcon
                  onClick={() => handleAddToFavourites(singleMovie)}
                  color="primary"
                  fontSize="large"
                  sx={{
                    marginLeft: "10px",
                    verticalAlign: "center",
                  }}
                />
              </Typography>
              <Typography variant="subtitle1">{response}</Typography>
              <Typography gutterBottom variant="h5" component="div">
                Year: {singleMovie.Year}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Genre: {singleMovie.Genre}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Director: {singleMovie.Director}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Plot: {singleMovie.Plot}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                IMDB Rating: {singleMovie.imdbRating}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                BoxOffice: {singleMovie.BoxOffice}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Container>
    </div>
  );
}

export default Movie;
