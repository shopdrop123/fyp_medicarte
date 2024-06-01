const Product = require("../models/Product");

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Create new product
const createProduct = async (req, res) => {
  const {
    ProductID,
    Slug,
    Title,
    SalePercent,
    Highlights,
    ProductImage,
    category_id,
    Brand,
    Price,
    SalePrice,
    unitpercase,
    AvailableQty,
    MaxOrder,
    Description,
    Variations,
    DiscountPrice,
    DiscountAmount,
  } = req.body;

  try {
    const productExists = await Product.findOne({ ProductID });

    if (productExists) {
      return res.status(400).json({ message: "Product already exists" });
    }

    const product = new Product({
      ProductID,
      Slug,
      Title,
      SalePercent,
      Highlights,
      ProductImage,
      category_id,
      Brand,
      Price,
      SalePrice,
      unitpercase,
      AvailableQty,
      MaxOrder,
      Description,
      Variations,
      DiscountPrice,
      DiscountAmount,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Update product by ID
const updateProduct = async (req, res) => {
  const {
    ProductID,
    Slug,
    Title,
    SalePercent,
    Highlights,
    ProductImage,
    category_id,
    Brand,
    Price,
    SalePrice,
    unitpercase,
    AvailableQty,
    MaxOrder,
    Description,
    Variations,
    DiscountPrice,
    DiscountAmount,
  } = req.body;

  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      product.ProductID = ProductID || product.ProductID;
      product.Slug = Slug || product.Slug;
      product.Title = Title || product.Title;
      product.SalePercent = SalePercent || product.SalePercent;
      product.Highlights = Highlights || product.Highlights;
      product.ProductImage = ProductImage || product.ProductImage;
      product.category_id = category_id || product.category_id;
      product.Brand = Brand || product.Brand;
      product.Price = Price || product.Price;
      product.SalePrice = SalePrice || product.SalePrice;
      product.unitpercase = unitpercase || product.unitpercase;
      product.AvailableQty = AvailableQty || product.AvailableQty;
      product.MaxOrder = MaxOrder || product.MaxOrder;
      product.Description = Description || product.Description;
      product.Variations = Variations || product.Variations;
      product.DiscountPrice = DiscountPrice || product.DiscountPrice;
      product.DiscountAmount = DiscountAmount || product.DiscountAmount;

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete product by ID
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      await product.remove();
      res.json({ message: "Product removed" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
