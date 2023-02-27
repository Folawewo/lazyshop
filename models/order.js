const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});
