const Router = require("express-promise-router");
const db = require("../db");
const router = new Router();

// Get all movies
router.get("/", async (req, res) => {
  try {
    const { rows: movies } = await db.query("SELECT * FROM movies ORDER BY id");
    res.status(200).send(movies);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get movie by id
router.get("/:id", async (req, res) => {
  try {
    const { rows } = await db.query(`
    SELECT id, title, poster, description, genres
      FROM   movies m
      JOIN  (
        SELECT movie.movie_id AS id, array_agg(g.name) AS genres
        FROM   movies_genres movie
        JOIN   genres g  ON g.id = movie.genre_id
        GROUP  BY movie.movie_id
        ) g USING (id)
      WHERE id = ${req.params.id};
    `);
    res.status(200).send(rows[0]);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update movie by id
router.put("/:id", async (req, res) => {
  try {
    const { rows } = await db.query(
      `
        update movies
        set title = '${req.body.title}', description = '${req.body.description}'
        WHERE id = ${req.params.id}
        returning *;
      `
    );
    res.status(200).send(rows[0]);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
