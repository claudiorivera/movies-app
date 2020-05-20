import React, { useState, useEffect } from "react";
import {
  CircularProgress,
  Box,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { Link } from "@reach/router";

export const MovieDetails = ({ movieId }) => {
  const [movieDetails, setMovieDetails] = useState({
    id: movieId,
    isFetching: true,
  });
  useEffect(() => {
    const getMovieDetails = async (id) => {
      setMovieDetails({ isFetching: true });
      // https://stackoverflow.com/questions/37269808/react-js-uncaught-in-promise-syntaxerror-unexpected-token-in-json-at-posit
      const response = await fetch(`/movies/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const movie = await response.json();
      setMovieDetails({ ...movie, isFetching: false });
    };
    getMovieDetails(Number(movieId));
  }, [movieId]);

  if (movieDetails.isFetching) {
    return (
      <Box display="flex" justifyContent="center" p={1}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Box display="flex" justifyContent="center" p={1}>
      <Card style={{ maxWidth: 500, marginBottom: "2rem" }}>
        <CardMedia
          style={{ height: 350 }}
          image={movieDetails.poster}
          title={movieDetails.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movieDetails.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {movieDetails.description}
          </Typography>
          <Box
            display="flex"
            flexWrap="wrap"
            flexDirection="row"
            justifyContent="center"
            mt={1}
          >
            {movieDetails.genres.map((genre, index) => (
              <Box p={0.5} key={index}>
                <Chip label={genre} />
              </Box>
            ))}
          </Box>
        </CardContent>
        <CardActions>
          <Link style={{ textDecoration: "none" }} to="/">
            <Button size="small" color="primary">
              Back
            </Button>
          </Link>
          <Button size="small" color="primary">
            Edit
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
