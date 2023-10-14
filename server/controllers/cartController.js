const { cli } = require('webpack-dev-server');
const pool = require('../db/models');

const cartController = {};

cartController.getUserCart = async (req, res, next) => {
    const client = await pool.connect()
        .catch(err => next({
            log: `cartController - pool connection failed ERROR: ${err}`,
            message: {
                err: 'Error in cartController.getUserCart. Check server logs'
            }
        }));
    try {
        const { id } = req.query;
        if (!id) return next({
            log: `cartController.getUserCart - never received an ID in query`,
            message: {
                err: 'Error in cartController.getUserCart. Check server logs'
            }
        });
        console.log(`passed in query param: ${id}`);
        const userCartQuery = `SELECT l.product_name, l.price, c.quantity AS qty
        FROM carts c
        JOIN users u
            ON c.user_id = u._id
        JOIN listings l
            ON c.listing_id = l._id
        WHERE u._id = $1;`

        const response = await client.query(userCartQuery, [ id ]);
        res.locals.userCart = response.rows;
    } catch (err) {
        return next({
            log: `cartController.getUserCart - querying user cart from db ERROR: ${err}`,
            message: {
                err: 'Error in cartController.getUserCart. Check server logs'
            }
        });
    } finally {
        client.release();
        return next();
    }
}

cartController.addToUserCart = async (req, res, next) => {
    const client = await pool.connect()
        .catch(err => next({
            log: `cartController - pool connection failed ERROR: ${err}`,
            message: {
                err: 'Error in cartController.addToUserCart. Check server logs'
            }
        }));
    try {
        const { userId, listingId, qty } = req.query;
        if (!userId || !listingId || !qty) return next({
            log: `cartController.addToUserCart - never received user and/or listing ID(s) and/or qty in query ERROR`,
            message: {
                err: 'Error in cartController.addToUserCart. Check server logs'
            }
        });
        console.log(`user id: ${userId}`);
        console.log(`listing id: ${listingId}, qty: ${qty}`);

        // // check if user already has item in cart
        // const checkQuery = `SELECT quantity FROM carts
        // WHERE user_id = $1 AND listing_id = $2`;
        // const checkResponse = await client.query(checkQuery, [ userId, listingId ]);
        // if (!checkResponse.rows.length) {

        // }
        
        const addToCartQuery = `INSERT INTO carts
        VALUES ($1, $2, $3);`

        await client.query(addToCartQuery, [ userId, listingId, qty ]);
    } catch (err) {
        return next({
            log: `cartController.addToUserCart - inserting into user cart in db ERROR: ${err}`,
            message: {
                err: 'Error in cartController.addToUserCart. Check server logs'
            }
        });
    } finally {
        client.release();
        return next();
    }
}

module.exports = cartController;