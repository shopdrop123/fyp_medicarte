const Category = require("../models/Category");

// Get all categories
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get category by ID
const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findOne({ _id: req.params.id });
    if (category) {
      res.json(category);
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Create new category
const createCategory = async (req, res) => {
  const { categoryName } = req.body;



    const category = new Category({
      categoryName,
    });

    const createdCategory = await category.save();
    res.status(201).json(createdCategory);
//   } catch (error) {
//     res.status(500).json({ message: "Server Error" });
//   }
};

// Update category by ID
const updateCategory = async (req, res) => {
  const { categoryId, categoryName } = req.body;

  try {
    const category = await Category.findOne({ _id: req.params.id });

    if (category) {
      category.categoryName = categoryName || category.categoryName;

      const updatedCategory = await category.save();
      res.json(updatedCategory);
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete category by ID
const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findOne({ _id: req.params.id });

    if (category) {
      await category.remove();
      res.json({ message: "Category removed" });
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
