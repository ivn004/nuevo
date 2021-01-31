const productAllController = {
  admin: (req, res) => {
    res.render('productAll', {
      title: "Todos Los Productos"
    });
  }
}

module.exports = productAllController;