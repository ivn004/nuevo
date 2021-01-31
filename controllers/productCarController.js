const products = require("../data/products")

const productCarController ={
    carrito:(req,res) =>{
        res.render('productCar',{
            title:"Carrito"
        });
    }
}

module.exports = productCarController;