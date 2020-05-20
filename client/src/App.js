import React from "react";
import { Router } from "@reach/router";
import { MainAppBar } from "./components/MainAppBar";
import { MoviesList } from "./components/MoviesList";

export const App = () => {
  return (
    <>
      <MainAppBar />
      <Router>
        <MoviesList path="/" />
      </Router>
    </>
  );
};
