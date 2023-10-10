const imageController = {};
const AWS = require("aws-sdk");
require("aws-sdk/lib/maintenance_mode_message").suppress = true;
require("dotenv").config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACC_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: "us-west-1",
});

imageController.getUrl = async (req, res, next) => {
  const { bucket, key } = req.body;
  const params = {
    Bucket: bucket,
    Key: key,
    Expires: 60,
  };
  try {
    const url = await s3.getSignedUrlPromise("putObject", params);
    res.locals.url = url;
    return next();
  } catch (e) {
    return next(e);
  }
};

module.exports = imageController;
