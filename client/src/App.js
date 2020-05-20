import React from "react";
import { Router } from "@reach/router";
import { MainAppBar } from "./components/MainAppBar";
import { MoviesList } from "./components/MoviesList";
import { MovieDetails } from "./components/MovieDetails";

export const App = () => {
  return (
    <>
      <MainAppBar />
      <Router>
        <MoviesList path="/" />
        <MovieDetails path="/details/:movieId" />
      </Router>
    </>
  );
};
