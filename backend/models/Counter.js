const mongoose = require("mongoose");

// Create a schema for the counter
const counterSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  seq: {
    type: Number,
    default: 0,
  },
});

const Counter = mongoose.model("Counter", counterSchema);

module.exports = Counter;
