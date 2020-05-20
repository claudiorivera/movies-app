import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Chip,
  CircularProgress,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { Link } from "@reach/router";

export const MovieEdit = ({ movieId }) => {
  return (
    <Box display="flex" justifyContent="center" p={1}>
      <div>Editing {movieId}</div>
    </Box>
  );
};
