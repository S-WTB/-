// app.js
const express = require('express');
const app = express();

// Dummy product data
const products = [
  { id: 1, name: 'Product A', price: 29.99 },
  { id: 2, name: 'Product B', price: 19.99 },
  { id: 3, name: 'Product C', price: 49.99 },
];

// Define the /api/products route
app.get('/api/products', (req, res) => {
  res.json(products);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));