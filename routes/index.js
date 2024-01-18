const express = require("express");
const routes = express.Router();
const productRoutes = require("./product.route");
const userRoutes = require("./user.route");
const orderRoutes = require("./order.route")

routes.use("/product", productRoutes);
routes.use("/user", userRoutes);
routes.use("/order", orderRoutes);

module.exports = routes;