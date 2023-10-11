const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

const passport = require("passport");

router.post("/login", authController.loginTestRoute, (req, res, next) => {
  res.status(200);
});

router.post("/register", authController.createUser, (req, res, next) => {
  res.status(200);
});

module.exports = router;
