const mongoose = require("mongoose");

const connectDB = () => {
    mongoose
    .connect("mongodb://127.0.0.1:27017")
    .then(() => {
        console.log("db connection succes");
    })
    .catch((err) => {
        console.log(err);
    });
};

module.exports = { connectDB };