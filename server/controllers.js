const models = require('./models.js');

module.exports = {
  getProducts: (req, res) => {
    models.getProducts(req)
      .then(({ data }) => {
        res.status(200);
        res.end(JSON.stringify(data));
      })
      .catach((err) => {
        console.log(err);
        res.sendStatus(404);
      });
  },

  getProduct: (req, res) => {
    models.getProduct(req)
      .then(({ data }) => {
        res.status(200);
        res.end(JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(404);
      })
  },

  getProductStyles: (req, res) => {
    models.getProductStyles(req)
      .then(({ data }) => {
        res.status(200);
        res.end(JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(404);
      })
  },

  getRelatedProducts: (req, res) => {
    models.getRelatedProducts(req)
      .then(({ data }) => {
        res.status(200);
        res.end(JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(404);
      })
  }
}