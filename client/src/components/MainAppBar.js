//https://material-ui.com/components/app-bar/
import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "@reach/router";

export const MainAppBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" noWrap>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            Movies App
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
