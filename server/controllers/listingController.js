const pool = require('../db/models');

const listingController = {};

listingController.getAllListings = async (req, res, next) => {
    const client = await pool.connect()
        .catch(err => next({
            log: `listingController - pool connection failed ERROR: ${err}`,
            message: {
                err: 'Error in listingController.getAllListings. Check server logs'
            }
        }));
    try {
        const listingsQuery = `SELECT l.product_name AS listing,
            l.price,
            l.quantity,
            l.category,
            u.username AS seller
        FROM listings l
        JOIN users u
          ON l.seller_id = u._id;`;

        const response = await client.query(listingsQuery);
        res.locals.listings = response.rows;

    } catch (err) {
        return next({
            log: `listingController.getAllListings - querying listings from db ERROR: ${err}`,
            message: {
                err: 'Error in listingController.getAllListings. Check server logs'
            }
        });
    } finally {
        client.release();
        return next();
    }
};

listingController.getListing = async (req, res, next) => {
    const client = await pool.connect()
        .catch(err => next({
            log: `listingController - pool connection failed ERROR : ${err}`,
            message: {
                err: 'Error in listingController.getListing. Check server logs'
            }
        }));
    try {
        const { id } = req.params;
        if (!id) return next({
            log: `listingController.getListing - never received an ID in params ERROR : ${err}`,
            message: {
                err: 'Error in listingController.getListing. Check server logs'
            }
        });
        console.log(`passed in query param: ${id}`);
        const getListingQuery = `SELECT l.product_name AS listing,
            l.price,
            l.quantity,
            l.category,
            u.username AS seller
        FROM listings l
        JOIN users u
            ON l.seller_id = u._id
        WHERE l._id = $1;`;

        const response = await client.query(getListingQuery, [ id ]);
        res.locals.listing = response.rows[0];
    } catch (err) {
        return next({
            log: `listingController.getListing - querying listing from db ERROR: ${err}`,
            message: {
                err: 'Error in listingController.getListing. Check server logs'
            }
        });
    } finally {
        client.release();
        return next();
    }
};

listingController.createListing = (req, res, next) => {};

listingController.updateListing = (req, res, next) => {};

listingController.deleteListing = (req, res, next) => {};
module.exports = listingController;
