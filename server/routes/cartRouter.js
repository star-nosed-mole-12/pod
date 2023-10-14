const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.get('/:id', cartController.getUserCart,
    (req, res) => res.status(200).json(res.locals.userCart)
);

module.exports = router;