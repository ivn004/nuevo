const productAddController = {
    nuevoProducto: (req, res) => {
        res.render('productAdd', {
            title: "Añadir Producto"
        });
    }
}

module.exports = productAddController;