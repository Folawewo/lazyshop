const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Product = require('./models/product');
const Order = require('./models/order');

require('./services/mongo');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/cart/add', async (req, res) => {
  const { productId } = req.body;

  const product = await Product.findById(productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  const order = await Order.findOne();

  if (order) {
    order.products.push(product);
    await order.save();
  } else {
    await Order.create({ products: [product] });
  }

  res.json({ message: 'Product added to cart' });
});

app.get('/cart', async (req, res) => {
  const order = await Order.findOne().populate('products');

  if (!order) {
    return res.json({ products: [] });
  }
  res.json({ products: order.products });
});

app.post('/checkout', async (req, res) => {
  const order = await Order.findOne();

  if (!order) {
    return res.status(404).json({ message: 'No items in cart' });
  }

  await order.remove();

  res.json({ message: 'Order placed' });
});

module.exports = app;
