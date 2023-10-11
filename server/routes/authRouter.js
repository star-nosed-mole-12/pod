const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/login", (req, res, next) => {});

router.post("/register", authController.createUser, (req, res, next) => {
  res.status(200);
});

module.exports = router;
