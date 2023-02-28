const mongoose = require('mongoose');

require('dotenv').config();

mongoose.set('strictQuery', false);

mongoose.connect('process.env.MONGO_URL', () => {
  console.log('Database Connected');
  serverSelectionTimeoutMS: 30000; // Increase timeout to 30 seconds
});
