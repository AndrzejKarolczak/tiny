const express = require('express');
const router = express.Router();
const validateField = require('../public/javascripts/functions.js');

router.get('/zadanie1', (req, res, next) => {
  res.render('zadanie1', { title: 'Zadanie 1' });
});

router.get('/', (req, res, next) => {
  res.render('zadanie1', { title: 'Zadanie 1' });
});

router.post('/', (req, res, next) => {

  let numOfRowsField = req.body['no-of-rows'];
  let message = validateField( 'no-of-rows', numOfRowsField);
  let numOfColumnsField = req.body['no-of-columns'];
  message = message + validateField('no-of-columns', numOfColumnsField);

  if (message !== "") {
    res.write(`Wystąpiły następujące problemy: ${message}`)
  } else {

  }

  res.render('zadanie1', { title: 'Zadanie 1' });
  console.log(req.body)
});

module.exports = router;