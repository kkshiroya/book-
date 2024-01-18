const express = require("express");

const validate = require("../middlewares/validate");

const { bookcontroller } = require("../controller");
const { bookvaildation} = require("../validations");

const routes = express.Router();

routes.get("/get", bookcontroller.getbook);

routes.post("/add", validate(bookcontroller.addbook), bookcontroller.addbook);

routes.put("/update/:id", bookcontroller.updatebook);


routes.delete("/delete/:id", bookcontroller.deletebook);


module.exports = routes;
