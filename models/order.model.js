const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "productSchema",
  },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userSchema",
    },
});

const order = mongoose.model("orderSchema", orderSchema);

module.exports = order;