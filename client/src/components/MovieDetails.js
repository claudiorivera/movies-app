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
  TextField,
} from "@material-ui/core";
import { Link } from "@reach/router";

export const MovieDetails = ({ movieId }) => {
  const [movieDetails, setMovieDetails] = useState({});
  const [isFetching, setIsFetching] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

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
            {isEditing ? (
              <TextField
                variant="outlined"
                fullWidth
                label={"Title"}
                defaultValue={movieDetails.title}
                onChange={(e) => {
                  setMovieDetails({ ...movieDetails, title: e.target.value });
                }}
              />
            ) : (
              movieDetails.title
            )}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {isEditing ? (
              <TextField
                variant="outlined"
                fullWidth
                multiline
                label={"Description"}
                defaultValue={movieDetails.description}
                onChange={(e) => {
                  setMovieDetails({
                    ...movieDetails,
                    description: e.target.value,
                  });
                }}
              />
            ) : (
              movieDetails.description
            )}
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
          {/* Reach Router relative links */}
          <Button
            size="small"
            color="primary"
            onClick={() => {
              setIsEditing(!isEditing);
            }}
          >
            {isEditing ? <>Save</> : <>Edit</>}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
