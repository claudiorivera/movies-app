import React, { useState, useEffect } from "react";

export const MovieDetails = ({ movieId }) => {
  const [movieDetails] = useState({ id: movieId });
  useEffect(() => {
    const getMovieDetails = async (id) => {
      console.log(id);
      const response = await fetch(`/movies/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const movie = await response.json();
      console.log(movie);
    };
    getMovieDetails(Number(movieId));
  }, [movieId]);

  return <div>{movieDetails.id}</div>;
};
