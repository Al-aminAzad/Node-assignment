const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('../views/pages/home.ejs');
});

router.get('/about', (req, res) => {
  res.render('../views/pages/about.ejs');
});
router.get('/contact', (req, res) => {
  res.render('../views/pages/contact.ejs');
});
module.exports = router;
