const express = require("express");
const router = express.Router();
const imageController = require("../controllers/imageController");


router.get("/:listingId", imageController.getUrl, (req, res, next) => {
  const { url } = res.locals;
  return res.status(200).json(url);
});

// router.post("/", imageController.getUrl, (req, res, next) => {
//   const { url } = res.locals;
//   return res.status(200).json(url);
// });

module.exports = router;
