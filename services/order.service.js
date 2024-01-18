const { orderSchema } = require("../models");


const getorderbyFirstName = (firstName) => {
    return orderSchema.find({ firstName });
};

const getorder = () => {
    return orderSchema.find().populate("product").populate("user");
};

const addorder = (body) => {
    return orderSchema.create(body);
};

const deleteorder = (id) => {
    return orderSchema.findByIdAndDelete(id);
};

const updateorder = (id, body) => {
    return orderSchema.findByIdAndUpdate(id, { $set: body });
};

module.exports = { getorderbyFirstName, addorder, deleteorder, getorder, updateorder };
