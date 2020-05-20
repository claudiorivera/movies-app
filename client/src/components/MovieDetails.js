import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";

export const MovieDetails = ({ movieId }) => {
  const [movieDetails, setMovieDetails] = useState({
    id: movieId,
    isFetching: false,
  });
  useEffect(() => {
    const getMovieDetails = async (id) => {
      setMovieDetails({ isFetching: true });
      const response = await fetch(`/movies/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const movie = await response.json();
      console.log(movie);
      setMovieDetails({ isFetching: false });
      setMovieDetails(movie);
    };
    getMovieDetails(Number(movieId));
  }, [movieId]);

  return movieDetails.isFetching ? (
    <CircularProgress />
  ) : (
    <div>{movieDetails.title}</div>
  );
};
