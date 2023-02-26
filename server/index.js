// imports
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./routes.js');

const app = express();

// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client')));
app.use('/products', router);

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.get(`/${process.env.LOADER_IO}`, (req, res) => res.send(`${process.env.LOADER_IO}`));

app.listen(PORT);
console.log(`Server listening at http://${HOST}:${PORT}`);