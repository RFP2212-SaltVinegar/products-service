const client = require('./connection.js');

module.exports = {
  // return promises
  getProducts: (req) => {
    return await client.query();
  },

  getProduct: (req) => {
    return await client.query();
  },

  getProductStyles: (req) => {
    return await client.query();
  },

  getRelatedProducts: (req) => {
    return await client.query();
  }
}