import React from "react";
import { Router } from "@reach/router";
import { Box } from "@material-ui/core";
import { MainAppBar } from "./components/MainAppBar";
import { MoviesList } from "./components/MoviesList";

export const App = () => {
  return (
    <>
      <MainAppBar />
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        marginTop="20px"
      >
        <Router>
          <MoviesList path="/" />
        </Router>
      </Box>
    </>
  );
};
