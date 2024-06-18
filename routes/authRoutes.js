const express = require("express");
const router = express.Router();
const {
  register,
  login,
  createMany,
} = require("../controllers/authController");

router.post("/register", register);
router.post("/bulk-create", createMany);
router.post("/login", login);
// router.post("/", login);

module.exports = router;
