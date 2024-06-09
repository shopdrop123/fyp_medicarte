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

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/create", createUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;
