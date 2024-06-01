const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// Authenticate user and get token
const authUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ type: "NO_USER_FOUND" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ type: "WRONG_CREDENTIALS" });
    }

    res.json({
        token: generateToken(user._id),
        user:{
            id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            role: user.role,
            email: user.email,
            profileimage: user.profileimage,
            token: generateToken(user._id),
        }
    });
  } catch (err) {
    res.status(500).json({ type: err });
  }
};

module.exports = {
  authUser,
};
