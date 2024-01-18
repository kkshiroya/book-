require("dotenv").config();

const http = require("http");

const express = require("express");

const { connectDB } = require("./db/dbconnect");

const routes = require("./routes");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connectDB();
app.use("/v1", routes);

http.createServer(app).listen(process.env.PORT, () => {
    console.log("server started");
});
