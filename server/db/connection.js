const { Client } = require('pg');
const dotenv = require('dotenv');

const client = new Client({
  user: process.env.USER,
  host: process.env.HOST,
  port: process.env.PORT,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

client
  .connect()
  .then(() => console.log('connected client'))
  .catch(err => console.log(err));

module.exports = client;