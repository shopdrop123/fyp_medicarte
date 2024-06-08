const { getRepository } = require("typeorm");
const Order = require("../models/Order");

const createOrder = async (req, res) => {
  const { cart, user_id } = req.body;
  try {
    const order = new Order();
    order.cart = cart;
    order.user = user_id;
    order.createdAt = new Date();

    const orderRepository = getRepository(Order);
    await orderRepository.save(order);

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orderRepository = getRepository(Order);
    const orders = await orderRepository.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const orderRepository = getRepository(Order);
    const order = await orderRepository.findOne(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const orderRepository = getRepository(Order);
    const order = await orderRepository.findOne(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    await orderRepository.remove(order);
    res.json({ message: "Order deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getOrdersByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const orderRepository = getRepository(Order);
    const orders = await orderRepository.find({ where: { user: userId } });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  deleteOrder,
  getOrdersByUserId
};
