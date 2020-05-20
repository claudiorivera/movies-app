import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Link } from "@reach/router";

export const MoviesList = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    // Async function
    const getAllMovies = async () => {
      setIsFetching(true);
      // https://stackoverflow.com/questions/37269808/react-js-uncaught-in-promise-syntaxerror-unexpected-token-in-json-at-posit
      const response = await fetch("/movies", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const movies = await response.json();
      setAllMovies(movies);
      setIsFetching(false);
    };
    // Call the async function once on render
    getAllMovies();
  }, []);

  return isFetching ? (
    <Box display="flex" justifyContent="center" p={1}>
      <CircularProgress />
    </Box>
  ) : (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      {allMovies.map((movie) => (
        <Box p={1} key={movie.id}>
          <Link to={`movies/${movie.id}`}>
            <img src={movie.poster} alt={movie.title} />
          </Link>
        </Box>
      ))}
    </Box>
  );
};
