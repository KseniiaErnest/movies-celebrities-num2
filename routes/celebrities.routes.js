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
    occupation: req.body.theOccupation,
    image: req.body.thePhoto
  })
  .then((response) => {
    res.redirect('/celebrities')
  })
  .catch((err) => {
    console.log(err);
  })
});

// Details celebrity page
router.get('/:id', (req, res) => {
  CelebrityVer2.findById(req.params.id)
  .then((theCeleb) => {
    res.render('celebrities/celebrity-details', {theCeleb: theCeleb});
  })
  .catch((err) => {
    console.log(err);
  })
});

// Delete celebrity
router.post('/delete/:theID', (req, res) => {
  CelebrityVer2.findByIdAndDelete(req.params.theID)
  .then(() => {
    res.redirect('/celebrities')
  })
  .catch((err) => {
    console.log(err);
  })
});

// Edit celebrity
router.get('/:id/edit', (req, res) => {
  CelebrityVer2.findById(req.params.id)
  .then((theCelebrity) => {
    res.render('celebrities/edit-celebrity', {theCelebrity: theCelebrity})
  })
  .catch((err) => {
    console.log(err);
  })
});

router.post('/:id/edit', (req, res) => {
  CelebrityVer2.findByIdAndUpdate(req.params.id, {
    name: req.body.celebName,
    occupation: req.body.celebOccupation,
    image: req.body.celebImage
  }).then(() => {
    res.redirect('/celebrities/'+req.params.id)
  }).catch((err) => {
    console.log(err)
  })
})





module.exports = router;