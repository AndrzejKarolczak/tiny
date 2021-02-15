const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  //res.send('respond with a resource');
  res.render('zadanie1', { title: 'Zadanie 3' });
});

module.exports = router;
