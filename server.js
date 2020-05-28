require("dotenv").config();
const express = require("express");
const path = require("path");

// Environmental values
const PORT = process.env.PORT || 5000;

// Instantiate Express
const app = express();

// Middleware
app.use(express.json());

// Router
const movies = require("./routes/movies");
app.use("/movies", movies);

// Serve client/build if we're in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
}

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
