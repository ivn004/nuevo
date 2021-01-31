var express = require('express');
var router = express.Router();
const {detail} = require('../controllers/productController');
const {carrito} = require("../controllers/productCarController");

/* GET home page. */
router.get('/detail/:cursos', detail)
router.get("/carrito",carrito)
module.exports = router;