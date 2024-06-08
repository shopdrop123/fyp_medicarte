const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/usersControllers");
const checkAdminRole = require("../middlewares/checkAdminRole.middleware");

router.get("/",checkAdminRole, getUsers);
router.get("/:id",checkAdminRole, getUserById);
router.post("/create", createUser);
router.put("/update/:id",checkAdminRole, updateUser);
router.delete("/delete/:id",checkAdminRole, deleteUser);

module.exports = router;
