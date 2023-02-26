const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./services/mongo');

const app = express();

app.use(bodyParser.json());
app.use(cors());

module.exports = app;
