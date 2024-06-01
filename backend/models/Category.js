const mongoose = require("mongoose");
const Counter = require("./Counter");

// Create a schema for the category
const categorySchema = new mongoose.Schema({
    categoryId: {
      type: Number,
      unique: true,
    },
    categoryName: {
      type: String,
      required: true,
    },
  }, {
    timestamps: true,
  });
  
  // Pre-save hook to auto-increment categoryId
  categorySchema.pre("save", async function (next) {
    const doc = this;
    const counter = await Counter.findOneAndUpdate(
      { id: "categoryId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    doc.categoryId = counter.seq;
    next();
  });
  
  const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
