const Router = require("express-promise-router");
const db = require("../db");
const router = new Router();

// Example route
// Get all items
router.get("/", async (req, res) => {
  try {
    const { rows: items } = await db.query("SELECT * FROM items");
    res.status(200).send(items);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
