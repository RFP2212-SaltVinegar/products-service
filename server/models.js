const client = require('./db/connection.js');

module.exports = {
  // return promises
  getProduct: (id) => {
    var result = {};

    const product = {
      text: `SELECT * FROM products WHERE id=$1`,
      values: [id]
    };

    const features = {
      text: `WITH features as (SELECT feature, value FROM features WHERE product_id = $1) SELECT json_agg(features.*) AS features FROM features`,
      values: [id]
    }

    client
      .query(product)
      .then(({ rows }) => {
        result = {...rows[0]}
      })

    return client
      .query(features)
      .then(({ rows }) => {
        result = {...result, ...rows[0]};
        return result;
      })
  },

  getProductStyles: (req) => {
    const query = {
      text: 'SELECT * FROM styles WHERE product_id= $1',
      values: [req.params.product_id]
    };

    return client.query(query);
  },

  getRelatedProducts: (product_id) => {
    const query = {
      text: 'SELECT related_id FROM related WHERE product_id=$1',
      values: [product_id]
    };

    return client
      .query(query)
      .then(({ rows }) => {
        const related = [];
        for (var i = 0; i < rows.length; i++) {
          related.push(rows[i].related_id);
        }
        return related;
      })
  }
}