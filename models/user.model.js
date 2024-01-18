const { string } = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        trim: true,
    },
    AGE: {
        type: Number,
        trim: true,
    },
    mobileNumber: {
        type: Number,
        trim: true,
    },
    email: {
        type: String
    }
});

const user = mongoose.model("userSchema", userSchema);

module.exports = user;