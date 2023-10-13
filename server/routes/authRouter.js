const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

const passport = require("passport");

router.post("/login", authController.loginTestRoute, (req, res) => {
  res.status(200).send('Login successful');
});

router.post("/register", authController.createUser, (req, res) => 
  res.status(200).send('Account creation success')
);

module.exports = router;
