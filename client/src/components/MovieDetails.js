import React, { useState } from "react";

export const MovieDetails = ({ movieId }) => {
  const [movieDetails] = useState({ id: movieId });

  return <div>{movieDetails.id}</div>;
};
