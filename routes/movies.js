const Router = require("express-promise-router");
const db = require("../db");
const router = new Router();

// Get all movies
router.get("/", async (req, res) => {
  try {
    const { rows: movies } = await db.query("SELECT * FROM movies");
    res.status(200).send(movies);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
