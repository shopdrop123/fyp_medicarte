const Order= require('../models/Order');
const User = require('../models/User');

const createOrder = async (req, res) => {
  const { cart, user_id } = req.body;
  const user = await User.findById(user_id);
  try {
    const order = new Order({
      cart: cart,
      user: user,

    });
   

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);

   
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findOne(id);
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
    const order = await Order.findOne(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    await Order.remove(order);
    res.json({ message: "Order deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getOrdersByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const orders = await Order.find({ where: { user: userId } });
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
