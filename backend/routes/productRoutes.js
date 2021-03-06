const express = require('express');
const router = express.Router();

const {
	getAllProducts,
	getAllProductsById,
	postProductOrder,
	getProductsByNameOrDescription,
} = require('../conftroller/productController');

//@desc   GET all products from db
//@route  GET /api/products
//@access Public
router.get('/', getAllProducts);

router.get('/search/:text', getProductsByNameOrDescription);

//@desc   GET all products by id from db
//@route  GET /api/products/:id
//@access Public
router.get('/:id', getAllProductsById);

module.exports = router;
