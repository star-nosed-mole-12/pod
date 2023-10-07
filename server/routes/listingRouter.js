const express = require("express");
const router = express.Router();
const listingController = require("../controllers/listingController");

router.get("/", listingController.getAllListings, (req, res) => {
  console.log(res.locals.listings);
  return res.sendStatus(200);
});

router.get("/:id", listingController.getListing, (req, res) => {
  return res.sendStatus(200);
});

router.post("/", listingController.createListing, (req, res) => {
  return res.sendStatus(200);
});

router.put("/", listingController.updateListing, (req, res) => {
  return res.sendStatus(200);
});

router.delete("/", listingController.deleteListing, (req, res) => {
  return res.sendStatus(200);
});

module.exports = router;