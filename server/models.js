const client = require('./db/connection.js');

module.exports = {
  // for product
  getProduct: async (id) => {
    const query = {
      name: 'get-product',
      text: `SELECT json_build_object(
        'id', $1::INT,
        'name', name,
        'slogan', slogan,
        'description', description,
        'category', category,
        'default_price', default_price,
        'features', (SELECT json_agg(json_build_object(
          'feature', feature,
          'value', value
        )) AS features FROM features WHERE product_id = $1::INT)
      )
      FROM products
      WHERE id = $1`,
      values: [id]
    }

    return await client
      .query(query)
      .then(({ rows }) => rows[0].json_build_object);

    // var result = {};

    // const product = {
    //   text: `SELECT * FROM products WHERE id=$1`,
    //   values: [id]
    // };

    // const features = {
    //   text: `WITH features as (SELECT feature, value FROM features WHERE product_id = $1) SELECT json_agg(features.*) AS features FROM features`,
    //   values: [id]
    // }

    // client
    //   .query(product)
    //   .then(({ rows }) => {
    //     result = {...rows[0]}
    //   })

    // return client
    //   .query(features)
    //   .then(({ rows }) => {
    //     result = {...result, ...rows[0]};
    //     return result;
    //   })
  },

  // for product styles
  getProductStyles: (product_id) => {
    const styles = {
      // text:
      // `SELECT json_build_object(
      //   'product_id', $1,
      //   'results', (SELECT json_agg(
      //     json_build_object(
      //       'style_id', id,
      //       'name', name,
      //       'original_price', original_price,
      //       'sale_price', sale_price,
      //       'default?', default_price
      //     )
      //   ) FROM styles WHERE product_id  = $1
      // )`,
      // values: [product_id]
    };

    return client
      .query(styles)
      .then(({ rows }) => {
        return rows;
      });
  },

  // for related products
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