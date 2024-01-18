const { userSchema } = require("../models");


const getuserbyFirstName = (firstName) => {
    return userSchema.find({ firstName });
};

const getuser = () => {
    return userSchema.find();
};

const adduser = (body) => {
    return userSchema.create(body);
};

const deleteuser = (id) => {
    return userSchema.findByIdAndDelete(id);
};

const updateuser = (id, body) => {
    return userSchema.findByIdAndUpdate(id, { $set: body });
};

module.exports = { getuserbyFirstName, adduser, deleteuser, getuser, updateuser };
