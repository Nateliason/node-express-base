const express = require('express');
const router = express.Router();
const docController = require('../controllers/docController');

const { catchErrors } = require('../handlers/errorHandlers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',  { title: 'Signed'});
});

router.get('/add', docController.addDoc);
router.post('/add', catchErrors(docController.createDoc));

module.exports = router;
