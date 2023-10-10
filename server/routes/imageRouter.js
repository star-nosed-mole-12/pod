const express = require("express");
const router = express.Router();
const imageController = require("../controllers/imageController");

router.get("/", imageController.getUrl, (req, res, next) => {
  const { url } = res.locals;
  return res.sendStatus(200).json(url);
});
