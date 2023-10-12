<<<<<<< HEAD
require("aws-sdk/lib/maintenance_mode_message").suppress = true;
require("dotenv").config();

const pool = require("../db/models");
const imageController = {};
const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACC_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: "us-west-1",
});

imageController.getUrl = async (req, res, next) => {
  const { key } = req.body;
  // Either we set a key and send it to client or client sets a key and sends to us
  // Either way need to store key inside of our DB and use it to query for our photos.
  const params = {
    Bucket: "listing-photos-scout",
    Key: key,
    Expires: 60,
  };
  console.log(params);
  try {
    const url = await s3.getSignedUrlPromise("putObject", params);
    res.locals.url = url;
    return next();
  } catch (e) {
    return next(e);
  }
};

module.exports = imageController;
=======
const imageController = {};

module.exports = imageController;
>>>>>>> dev
