import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavouriteMovie } from "../redux/actions/favouriteMovieActions";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

function FavouriteMovies() {
  const dispatch = useDispatch();
  const favouriteMovies = useSelector(
    (state) => state.favouriteMovies.favouriteMovies
  );

  const handleRemoveMovie = (index) => {
    dispatch(removeFavouriteMovie(index));
  };

  return (
    <div className="fav">
      <Typography
        gutterBottom
        variant="h2"
        component="div"
        sx={{ textAlign: "center" }}
      >
        Favourite Movies
      </Typography>
      {favouriteMovies.map((movie, index) => {
        return (
          <Box
            key={movie.imdbID}
            sx={{
              display: "flex",
              marginTop: "40px",
              justifyContent: "center",
            }}
          >
            <Grid item>
              <Card sx={{ width: 345, height: 245 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={movie.Poster}
                    alt={movie.Title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <CloseIcon onClick={() => handleRemoveMovie(index)} />
          </Box>
        );
      })}
    </div>
  );
}

export default FavouriteMovies;
