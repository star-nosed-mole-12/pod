const pool = require("../db/models");

const authController = {};

authController.createUser = async (req, res, next) => {
  //   const { username, password } = req.body;
  const client = await pool.connect().catch((err) =>
    next({
      log: `authController - pool connection failed; ERROR: ${err}`,
      message: {
        err: "Error in authController.createUser. Check server logs",
      },
    })
  );
  try {
    const listingsQuery = `SELECT l.product_name AS listing,
      l.price,
      l.quantity,
      l.category,
      u.username AS seller
  FROM listings l
  JOIN users u
    ON l.seller_id = u._id; `;

    const response = await client.query(listingsQuery);
    console.log("RESPONSE INSIDE OF AUTHCONTROLLER", response);
    res.locals.listings = response.rows;
  } catch (err) {
    return next({
      log: `listingController.getAllListings - querying listings from db ERROR: ${err}`,
      message: {
        err: "Error in listingController.getAllListings. Check server logs",
      },
    });
  } finally {
    client.release();
    return next();
  }
};

module.exports = authController;
