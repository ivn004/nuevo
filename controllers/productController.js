const products = require("../data/products")

const productController ={
    detail:(req,res) =>{
        const id = req.params.id
        const product = products.find(product => {
            return product.id === +id
        });
        const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


        res.render('productDetail',{
            product,
            toThousand,
            title:"Detalle"
        });
    }
}

module.exports = productController;