const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	countInStock: {
		type: Number,
		required: true,
	},
	imageUrl: {
		type: String,
		required: true,
	},
});

// create the schema to mongoDB service
const Product = mongoose.model('product', productsSchema);

module.exports = Product;
