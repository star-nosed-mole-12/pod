const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.get('/', cartController.getUserCart,
    (req, res) => res.status(200).json(res.locals.userCart)
);

router.post('/', cartController.addToUserCart,
    (req, res) => res.status(200).send('Added to cart')
);

router.patch('/', cartController.updateUserCart,
    (req, res) => res.status(200).send('Updated cart')
);

module.exports = router;