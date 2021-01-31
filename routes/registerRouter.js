var express = require('express');
var router = express.Router();
const {registro} = require('../controllers/registerController');

/* GET home page. */
router.get('/', registro)
module.exports = router;