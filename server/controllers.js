const models = require('./models.js');

module.exports = {
  getProduct: (req, res) => {
    models.getProduct(req.params.product_id)
      .then((result) => {
        res
          .status(200)
          .json(result);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(404);
      })
  },

  getProductStyles: (req, res) => {
    models.getProductStyles(req.params.product_id)
      .then((result) => {
        res
          .status(200)
          .json(result);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(404);
      })
  },

  getRelatedProducts: (req, res) => {
    models.getRelatedProducts(req.params.product_id)
      .then((result) => {
        res
          .status(200)
          .json(result);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(404);
      })
  }
}