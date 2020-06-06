const express = require('express');
const routes = express.Router();

const Product = require('../models/index')

routes.get('/api/products', (req, res, next) => {
  res.send(200, {products: []});
  next();
});

routes.get('/api/products/:productId', (req, res, next) => {});

routes.post('/api/products', (req, res, next) => {
  console.log('POST /api/product')
  console.log(req.body)
  
  let product = new Product()
  product.name = req.body.name
  product.price = req.body.price
  product.year = req.body.year
  product.description = req.body.description

  product.save((err, ProductSchema)=>{
     if (err){
         res.send(500).send({message: `Algo anda mal: ${err}`})
     }
    res.status(200).send({product: ProductSchema})
  })
});

routes.get('*', (req, res) => {
    res.status(404).send({message: 'Ruta no encontrada !'});
});

module.exports = routes;
