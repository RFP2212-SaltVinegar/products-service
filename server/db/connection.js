const { Client } = require('pg');
const dotenv = require('dotenv');

const client = new Client({
  user: process.env.USER,
  port: process.env.PORT,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

client.connect();

modules.exports = client;