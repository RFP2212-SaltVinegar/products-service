const client = require('./db/connection.js');

module.exports = {
  // return promises
  getProduct: (id) => {
    const query = {
      text: `SELECT *, (
        SELECT feature FROM features WHERE product_id = $1
      )
      FROM products WHERE id = $1`,
      values: [id]
    };

    return client.query(query);
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