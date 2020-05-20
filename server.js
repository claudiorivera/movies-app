require("dotenv").config();
const express = require("express");
const path = require("path");

// Example route
const items = require("./routes/items");

// Environmental values
const PORT = process.env.PORT || 5000;

// Instantiate Express
const app = express();
const mountRoutes = require("./routes");
mountRoutes(app);

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")));

// Router
// Example route
app.use("/items", items);

// https://coursework.vschool.io/deploying-mern-with-heroku/
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
