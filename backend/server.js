const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Product = require('./models/Product');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// Get all products. Implement filtering if query params are present
app.get('/api/products', async (req, res) => {
  try {
    const { category, search } = req.query;
    let query = {};
    if (category) {
      query.category = category;
    }
    if (search) {
      query.name = { $regex: search, $options: 'i' };
    }
    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Seed data route - run once to populate DB
app.post('/api/products/seed', async (req, res) => {
  try {
    const defaultProducts = [
      { name: 'Wireless Headphones', description: 'Noise-cancelling over-ear headphones.', price: 199.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80', category: 'Electronics' },
      { name: 'Smartwatch', description: 'Track your health and stay connected.', price: 149.99, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80', category: 'Electronics' },
      { name: 'Running Shoes', description: 'Lightweight comfortable running shoes.', price: 89.99, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80', category: 'Footwear' },
      { name: 'Leather Wallet', description: 'Premium genuine leather wallet.', price: 49.99, image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80', category: 'Accessories' },
      { name: 'Coffee Mug', description: 'Ceramic mug for your morning coffee.', price: 14.99, image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=80', category: 'Kitchen' },
      { name: 'Desk Lamp', description: 'LED desk lamp with adjustable brightness.', price: 34.99, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80', category: 'Home' },
    ];
    await Product.deleteMany({});
    const createdProducts = await Product.insertMany(defaultProducts);
    res.json(createdProducts);
  } catch (error) {
    res.status(500).json({ message: 'Error seeding database' });
  }
});

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});
