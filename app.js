require('dotenv').config();
const express = require('express');
const apiRoutes = require('./routes/careers');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // To parse JSON data
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

module.exports = app;
