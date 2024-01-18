const joi = require("joi");

const adduser = {
    body: joi.object().keys({
        userName: joi.string().required().trim(),
        AGE: joi.number().required(),
        mobailNumber: joi.string().required().trim(),
        email: joi.string().required()

    }),
};

module.exports = {
    adduser,
};