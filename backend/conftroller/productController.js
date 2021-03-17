const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
	try {
		const products = await Product.find({});

		res.json(products);
	} catch (error) {
		console.error(error);
		res.status(400).json({ message: 'Server Error' });
	}
};

const getAllProductsById = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);

		res.json(product);
	} catch (error) {
		console.error(error);
		res.status(400).json({ message: 'Server Error' });
	}
};

const postProductOrder = async (req, res) => {
	try {
		const products = req.body;
		const filterProd = products.map((prod) => ({ _id: prod.id }));
		// const updateFilter = req.params.products(product => product._id)
		const resp = await Product.updateMany(filterProd, (e) => {
			countInStock: e.countInStock - 1;
		});

		res.status(200).json({ message: 'SUCCESS..' });
	} catch (error) {
		console.log(error);
	}
};

const getProductsByNameOrDescription = async (req, res) => {
	const text = req.params.text;
	try {
		const products = await Product.find({
			$or: [
				{
					name: { $regex: new RegExp(text, 'gi') },
				},
				{
					description: { $regex: new RegExp(text, 'gi') },
				},
			],
		});

		res.json(products);
	} catch (error) {
		console.error(error);
		res.status(400).json({ message: 'Server Error' });
	}
};

module.exports = {
	getAllProducts,
	getAllProductsById,
	postProductOrder,
	getProductsByNameOrDescription,
};
