const { bookSchema } = require("../models");


const getbookbyFirstName = (firstName) => {
    return bookSchema.find({ firstName });
};

const getbook = () => {
    return bookSchema.find();
};

const addbook = (body) => {
    return bookSchema.create(body);
};

const deletebook = (id) => {
    return bookSchema.findByIdAndDelete(id);
};

const updatebook = (id, body) => {
    return bookSchema.findByIdAndUpdate(id, { $set: body });
};

module.exports = { getbookbyFirstName, addbook, deletebook, getbook, updatebook };
