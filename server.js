require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.SECRET_KEY);
const Contact = require("./backend/models/Contact");
const productRoutes = require("./backend/routes/productRoutes");
const usersRoutes = require("./backend/routes/usersRouter");
const authRoutes = require("./backend/routes/authRoutes");
const categoryRoutes = require("./backend/routes/categoryRoutes");
const orderRoutes = require("./backend/routes/orderRoutes");
const connectDB = require("./backend/config/db");

// Initializing APP
const app = express();

// Midlewares
app.use(express.json());
app.use(cors());

// Database Connection
connectDB();

// Contacts Route
app.get("/contact", (req, res) => {
  res.json({ message: "This is the contact page" });
});

app.post("/contact", (req, res) => {
  try {
    const { fullName, email, message, city } = req.body;
    let newContact = new Contact({
      fullName,
      email,
      message,
      city,
    });
    newContact.save();
    console.log("newContact has been saved");
    res.json("Contact record is aadded sucessully.");
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Stripe Integration Route
app.post("/api/payment", async (req, res) => {
  const { product, token, price } = req.body;

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token,
    });

    const charge = await stripe.charges.create({
      amount: price * 100,
      currency: "INR",
      customer: customer.id,
      receipt_email: token.email,
      description: "Processing Payment",
    });

    console.log(`Payment of ${price} is successfully Completed !!!`);
    res.status(200).json(charge);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Payment failed" });
  }
});

app.use("/api/products", productRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/orders", orderRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Hey There , Greetings From The Server. Have a Good Day :)");
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("serve at http://localhost:5000"));
