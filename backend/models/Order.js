const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    cart: {
      type: Object, // Using Object for JSON type data
      required: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // total: {
    //   type: Number,
    //   required: true,
    // },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
