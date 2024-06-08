const express = require("express");
const router = express.Router();
const {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controller/categoryController");
const checkAdminRole = require("../middlewares/checkAdminRole.middleware");

router.get("/", getCategories);
router.get("/:id", getCategoryById);
router.post("/create",checkAdminRole, createCategory);
router.put("/update/:id",checkAdminRole, updateCategory);
router.delete("/delete/:id",checkAdminRole, deleteCategory);

module.exports = router;
