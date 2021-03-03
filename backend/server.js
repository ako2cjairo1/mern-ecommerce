require('dotenv').config();
const express = require('express');
const connectMongoDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

const PORT = process.env.PORT || 5000;
const app = express();
// invoke mongoDB connection
connectMongoDB();

// use json data formatting
app.use(express.json());
// configure data routing
app.use('/api/products', productRoutes);
// start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
