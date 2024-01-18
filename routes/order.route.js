const express = require("express");

const validate = require("../middlewares/validate");

const { ordercontroller } = require("../controller");
const { ordervaildation} = require("../validations");

const routes = express.Router();

routes.get("/get", ordercontroller.getorder);

routes.post("/add", validate(ordercontroller.addorder), ordercontroller.addorder);

routes.put("/update/:id", ordercontroller.updateorder);


routes.delete("/delete/:id", ordercontroller.deleteorder);


module.exports = routes;
