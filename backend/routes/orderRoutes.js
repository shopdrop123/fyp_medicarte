const express = require("express");
const OrderController = require("../controller/OrderController");
const checkAdminRole = require("../middlewares/checkAdminRole.middleware");
const checkUserRole = require("../middlewares/checkUserRole.middleware");

const router = express.Router();

router.post("/", OrderController.createOrder);
router.get("/", OrderController.getAllOrders);
router.get("/:id", OrderController.getOrderById);
router.delete("/:id", OrderController.deleteOrder);
router.get("/user/:userId",checkUserRole, OrderController.getOrdersByUserId);

module.exports = router;
