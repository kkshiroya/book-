const express = require("express");

const validate = require("../middlewares/validate");

const { usercontroller } = require("../controller");
const { uservaildation} = require("../validations");

const routes = express.Router();

routes.get("/get", usercontroller.getuser);

routes.post("/add", validate(usercontroller.adduser), usercontroller.adduser);

routes.put("/update/:id", usercontroller.updateuser);


routes.delete("/delete/:id", usercontroller.deleteuser);


module.exports = routes;
