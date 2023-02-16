const client = require('./connection.js');

module.exports = {
  // return promises
  getProducts: (req) => {
    return client.query();
  },

  getProduct: (req) => {
    return client.query();
  },

  getProductStyles: (req) => {
    return client.query();
  },

  getRelatedProducts: (req) => {
    return client.query();
  }
}