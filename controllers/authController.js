const User = require("../models/User");
const bcrypt = require('bcrypt');

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = await User.create({ name, email, password });
    res
      .status(201)
      .json({ message: "User Created Successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Error creating user" });
  }
};

const createMany = async (req, res) => {
  try {
    const { users } = req.body;

    if (!Array.isArray(users) || users.length === 0) {
      return res.status(400).json({
        error: "Invalid input data. 'users' should be a non-empty array.",
      });
    }

    const createdUsers = await User.bulkCreate(users);

    if (createdUsers.length === 0) {
      return res.status(400).json({
        error: "No users were created. Please check your input data.",
      });
    }

    return res.status(201).json({ message: "Users created successfully" });
  } catch (error) {
    console.error("Error creating users:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while creating users" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email: email },
    });

    if (!user) {
      return res.status(401).json({ message: "* User not found" });
    }

    if (password !== user.password) {
      return res.status(401).json({ message: "* Invalid credentials" });
    }

    return res.status(200).json({
      message: "User login successfull",
      user: user,
    });
  } catch (error) {
    console.error("Login failed:", error);
    return res.status(500).json({ message: "Login failed" });
  }
};

module.exports = { register, login, createMany };
