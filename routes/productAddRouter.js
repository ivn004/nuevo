var express = require('express');
var router = express.Router();
const { admin } = require("../controllers/productAllController")
const {nuevoProducto} = require("../controllers/productAddController")

/* GET home page. */
router.get("/",admin)
router.get("/new",nuevoProducto)
module.exports = router;