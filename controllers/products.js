"use strict";
const Product = require("../models/index");
// app.get('/allow-cors', function(request, response) {
//   response.set('Access-Control-Allow-Origin', '*');
//   response.sendFile(__dirname + '/message.json');
// });
function getProducts(req, res) {
  // fetch('https://cors-demo.glitch.me/allow-cors', {mode:'cors'})

  // res.sendFile(__dirname + '/message.json');
  
  Product.find({}, (err, products) => {
    if (err)
      return res.status(500).send({ message: `Ha ocurrido un error: ${err}` });
    if (!products)
      return res.status(404).send({ message: "Producto no encontrado" });
    res.send({ products });
  });
}
function postProducts(req, res) {
  console.log(req.body);

  let product = new Product();
  product.name = req.body.name;
  product.price = req.body.price;
  product.year = req.body.year;
  product.description = req.body.description;

  product.save((err, Product) => {
    if (err) return res.status(404).send({ message: `Algo salio mal: ${err}` });
    res.send({ products: Product });
  });
}
function getProduct(req, res) {
  let productId = req.params.productId;

  Product.findById(productId, (err, product) => {
    if (err)
      return res.status(500).send({ message: `Ha ocurrido un error: ${err}` });
    if (!product)
      return res
        .status(404)
        .send({ message: "No se ha encontrado este producto." });

    res.send({ product });
  });
}
function putProduct(req, res) {
  let productId = req.params.productId;
  let updateBody = req.body;

  Product.findByIdAndUpdate(productId, updateBody, (err, updateProduct) => {
    if (err)
      return res.status(500).send({
        menssage: `Ha ocurrido un error con la actualizacion: ${err}`,
      });
    res.send({ product: updateProduct });
  });
}
function deleteProduct(req, res) {
  let productId = req.params.productId;

  Product.findByIdAndDelete(productId, (err) => {
    if (err)
      return res.status(404).send(`No se ha podido ser eliminado: ${err}`);
    res.send({ message: "El producto ha sido eliminado" });
  });
}

module.exports = {
  getProducts,
  getProduct,
  postProducts,
  putProduct,
  deleteProduct,
};
