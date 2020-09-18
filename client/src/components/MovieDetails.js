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
  const [movieDetails, setMovieDetails] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    // Async function
    const getMovieDetails = async (id) => {
      setIsFetching(true);
      const response = await fetch(`/movies/${id}`);
      const movie = await response.json();
      setMovieDetails(movie);
      setIsFetching(false);
    };
    // Call the async function
    getMovieDetails(parseInt(movieId));
  }, [movieId]);

  return isFetching ? (
    <Box display="flex" justifyContent="center" p={1}>
      <CircularProgress />
    </Box>
  ) : (
    <Box display="flex" justifyContent="center" p={1}>
      <Card style={{ maxWidth: 330, marginBottom: "2rem" }}>
        <CardMedia
          style={{ height: 500 }}
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
            m={1}
          >
            {movieDetails.genres.map((genre, index) => (
              <Box p={1} key={index}>
                <Chip label={genre} />
              </Box>
            ))}
          </Box>
        </CardContent>
        <CardActions>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button size="small" color="primary">
              Back
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
};
