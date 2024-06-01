const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  ProductID: {
    type: String,
    required: true,
  },
  Slug: {
    type: String,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  SalePercent: {
    type: String,
    required: true,
  },
  Highlights: {
    type: String,
  },
  ProductImage: {
    type: String,
    required: true,
  },
  category_id: {
    type: Number,
    required: true,
  },
  Brand: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  SalePrice: {
    type: Number,
    required: true,
  },
  unitpercase: {
    type: String,
    required: true,
  },
  AvailableQty: {
    type: Number,
    required: true,
  },
  MaxOrder: {
    type: Number,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Variations: {
    type: String,
    required: true,
  },
  DiscountPrice: {
    type: Number,
    required: true,
  },
  DiscountAmount: {
    type: Number,
    required: true,
  }
}, {
  timestamps: true,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
