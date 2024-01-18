const joi = require("joi");

const addbook = {
    body: joi.object().keys({
        bookName: joi.string().required().trim(),
        bookNumber: joi.string().required().trim(),
        bookPrice: joi.string().required().trim(),

    }),
};

module.exports = {
    addbook,
};