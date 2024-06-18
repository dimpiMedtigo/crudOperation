const express = require("express");
const router = express.Router();
const User = require("../models/User");
const {
  getUsers,
  deleteUser,
  updateUser,
  getUserById,
} = require("../controllers/userController");

router.get("/", getUsers);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);
router.get("/:id", getUserById);

module.exports = router;

