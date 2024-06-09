const User = require("../models/User");

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find({
      role: "user"    });
    console.log(users);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Create new user
const createUser = async (req, res) => {
  const { firstname, lastname, role, email, profileimage, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({
      firstname,
      lastname,
      role,
      email,
      profileimage,
      password,
    });

    const createdUser = await user.save();
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Update user by ID
const updateUser = async (req, res) => {
  const { firstname, lastname, role, email, profileimage, password } = req.body;

  try {
    const user = await User.findById(req.params.id);

    if (user) {
      user.firstname = firstname || user.firstname;
      user.lastname = lastname || user.lastname;
      user.role = role || user.role;
      user.email = email || user.email;
      user.profileimage = profileimage || user.profileimage;
      user.password = password || user.password;

      const updatedUser = await user.save();
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete user by ID
const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (user) {
      await user.remove();
      res.json({ message: "User removed" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
