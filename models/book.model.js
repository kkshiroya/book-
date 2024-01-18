const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        trim: true,
    },
    bookPrice: {
        type: Number,
        trim: true,
    },
    bookNumber: {
        type: Number,
        trim: true,
    }
});

const book = mongoose.model("bookSchema", bookSchema);

module.exports = book;