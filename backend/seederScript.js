require('dotenv').config();
const productsData = require('./data/products');
const connectMongoDB = require('./config/db');
const Product = require('./models/Product');

connectMongoDB();

const importData = async () => {
	try {
		// mongoDB method to delete contents of Product table.
		await Product.deleteMany({});

		// mongoDB method to insert data to Product table.
		await Product.insertMany(productsData);

		console.log('Data import SUCCESS.');
		process.exit();
	} catch (error) {
		console.error('Data import FAILED!', error);
		process.exit(1);
	}
};

// invoke the importing of data from ./config/data to mongoDB service
importData();
