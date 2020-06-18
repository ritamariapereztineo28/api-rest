const express = require("express");

const routes = express.Router();

const productsCtrl = require("../controllers/products");
const usersCtrl = require("../controllers/users");

routes.get("/api/products", productsCtrl.getProducts);
routes.get("/api/product/:productId", productsCtrl.getProduct);
routes.post("/api/product", productsCtrl.postProducts);
routes.put("/api/product/:productId", productsCtrl.putProduct);
routes.delete("/api/product/:productId", productsCtrl.deleteProduct);

routes.post("/api/user", usersCtrl.postUsers);
routes.get("/api/user", usersCtrl.getUsers);

module.exports = routes;
