const express = require("express");
const { login, register } = require("../controllers/authController");

const router = express.Router();

// POST /api/auth/login
router.post("/login", login);

// POST /api/auth/register (bonus, also counts as a 3rd endpoint)
router.post("/register", register);

module.exports = router;
