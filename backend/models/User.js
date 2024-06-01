const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Create a schema for the user
const userSchema = new mongoose.Schema({
 
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["user", "admin"], // example roles
    default: "user",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profileimage: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

// Pre-save middleware to hash the password before saving the user
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
