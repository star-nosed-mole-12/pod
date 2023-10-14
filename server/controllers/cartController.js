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
        const { id } = req.params;
        if (!id) return next({
            log: `cartController.getUserCart - never received an ID in params ERROR : ${err}`,
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

module.exports = cartController;