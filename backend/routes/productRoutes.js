const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controller/productControllers");
const checkAdminRole = require("../middlewares/checkAdminRole.middleware");


router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/create",checkAdminRole, createProduct);
router.put("/update/:id",checkAdminRole, updateProduct);
router.delete("/delete/:id",checkAdminRole, deleteProduct);

module.exports = router;
