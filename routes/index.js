// ./routes/index.js
const movies = require("./movies");

module.exports = (app) => {
  app.use("/movies", movies);
};
