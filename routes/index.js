const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// Get celebrities.routes.js
const celebritiesRoutes = require('./celebrities.routes');
router.use('/celebrities', celebritiesRoutes);

// Get movies.routes.js
const moviesRoutes = require('./movies.routes');
router.use('/movies', moviesRoutes);

module.exports = router;
