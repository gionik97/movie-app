import React from "react";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const gridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function SearchResults() {
  const movies = useSelector((state) => state.allMovies.movies);
  const gridClasses = gridStyles();

  return (
    <Grid container className={gridClasses.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {movies.Search &&
            movies.Search.map((movie) => {
              return (
                <Grid key={movie.imdbID} item>
                  <Card sx={{ width: 345, height: 245 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={movie.Poster}
                        alt={movie.Title}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          align="center"
                        >
                          <Link to={`/movie/${movie.imdbID}`}>
                            {movie.Title}
                          </Link>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SearchResults;
