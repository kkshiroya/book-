const joi = require("joi");

const orderproduct = {
    body: joi.object().keys({
        order: joi.string().required().trim(),
        user: joi.string().required().trim(),

    }),
};

module.exports = {
    orderproduct,
};