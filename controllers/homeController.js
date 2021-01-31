const products = require("../data/clases.json")

const homeController ={
    home:(req,res) =>{
        const saleProducts = products.filter((product)=>{
            return product.dificultad === "facil"
        });
        const visitedProducts = products.filter((product)=>{
            return product.dificultad === "dificil"
        });

        const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        res.render('index', {
            title:"HOME",
            saleProducts,
            visitedProducts,
            toThousand
        });
    },
};

module.exports = homeController;