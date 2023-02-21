const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  user: process.env.USER,
  host: process.env.HOST,
  port: process.env.PGPORT,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

client
  .connect()
  .then(() => console.log('connected client'))
  .catch(err => console.log(err));

module.exports = client;