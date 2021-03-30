const express = require('express');
const router = express.Router();

const { catchErrors } = require('../handlers/errorHandlers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',  { title: 'YOUR APP TITLE HERE'});
});

module.exports = router;
