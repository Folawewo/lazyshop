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

module.exports = app;
