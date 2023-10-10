const express = require("express");
const router = express.Router();
const listingController = require("../controllers/listingController");

router.get("/", listingController.getAllListings, (req, res) => {
  console.log(res.locals.listings);
  return res.status(200).json(res.locals.listings);
});

router.get("/:id", listingController.getListing, (req, res) => {
  return res.status(200).json(res.locals.listing);
});

router.post("/", listingController.createListing, (req, res) => {
  return res.status(200).send('New listing posted');
});

router.patch("/:id", listingController.updateListing, (req, res) => {
  return res.status(200).json(res.locals.updatedListing);
});

router.delete("/:id", listingController.deleteListing, (req, res) => {
  return res.status(200).json(res.locals.deletedListing);
});

module.exports = router;