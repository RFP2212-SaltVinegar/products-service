const client = require('./db/connection.js');

module.exports = {
  // for product
  getProduct: async (id) => {
    const product = {
      name: 'get-product',
      text: `SELECT json_build_object(
        'id', $1::INT,
        'name', name,
        'slogan', slogan,
        'description', description,
        'category', category,
        'default_price', default_price,
        'features', (SELECT json_agg
          (json_build_object(
            'feature', feature,
            'value', value
          ))
          FROM features
          WHERE product_id = $1::INT
        )
      )
      AS data
      FROM products
      WHERE id = $1`,
      values: [id]
    }

    return await client
      .query(product)
      .then(({ rows }) => rows[0].data);
  },

  // for product styles
  getProductStyles: async (product_id) => {
    const styles = {
      name: 'get-product-styles',
      text: `SELECT json_build_object(
        'product_id', $1::INT,
        'results', (SELECT json_agg
          (json_build_object(
            'style_id', id,
            'name', name,
            'original_price', original_price,
            'sale_price', sale_price,
            'default?', default_style,
            'photos', (SELECT json_agg
              (json_build_object(
                'thumbnail_url', thumbnail_url,
                'url', url
              )) FROM photos WHERE style_id = styles.id
            ),
            'skus', (SELECT json_object_agg(
              skus.id, (SELECT json_build_object(
                'quanitity', quantity,
                'size', size
              ))
            ) FROM skus WHERE style_id = styles.id)
          ))
        )
      )
      AS data
      FROM styles
      WHERE product_id = $1`,
      values: [product_id]
    };

    return await client
      .query(styles)
      .then(({ rows }) => rows[0].data);
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