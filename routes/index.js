const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// Get celebrities.routes.js
const celebritiesRoutes = require('./celebrities.routes');
router.use('/celebrities-ver2', celebritiesRoutes);

// Get movies.routes.js
const moviesRoutes = require('./movies.routes');
router.use('/movies-ver2', moviesRoutes);

module.exports = router;
