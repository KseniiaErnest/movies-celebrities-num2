const router = require('express').Router();
const CelebrityVer2 = require('../models/CelebrityVer2.model')


// Celebrities page -----*******-----*******-----
router.get('/', (req, res) => {
  CelebrityVer2.find()
  .then((allCelebrities) => {
    res.render('celebrities/celebrities', {allCelebrities: allCelebrities})
  })
  .catch((err) => {
    console.log(err);
  })
})


// Adding new celebrity -----*******-----*******-----
router.get('/create', (req, res) => {
  res.render('celebrities/new-celebrity')
});

router.post('/create', (req, res) => {
  CelebrityVer2.create({
    name: req.body.theName,
    occupation: req.body.TheOccupation,
    image: req.body.thePhoto
  })
  .then((response) => {
    res.redirect('/celebrities-ver2')
  })
  .catch((err) => {
    console.log(err);
  })
})



module.exports = router;