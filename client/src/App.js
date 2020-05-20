import React from "react";
import { Router } from "@reach/router";
import { MainAppBar } from "./components/MainAppBar";
import { MoviesList } from "./components/MoviesList";
import { MovieDetails } from "./components/MovieDetails";
import { MovieEdit } from "./components/MovieEdit";

export const App = () => {
  return (
    <>
      <MainAppBar />
      <Router>
        <MoviesList path="/" />
        <MovieDetails path="movies/:movieId" />
        <MovieEdit path="movies/:movieId/edit" />
      </Router>
    </>
  );
};
