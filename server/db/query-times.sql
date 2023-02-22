-- checking for the query times for all the endpoints
-- run \i server/db/query-times.sql in psql shell
\c products;

-- product endpoint
EXPLAIN ANALYZE SELECT json_build_object(
  'id', 1,
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
    WHERE product_id = 1
  )
)
AS data
FROM products
WHERE id = 1;

-- styles endpoint
EXPLAIN ANALYZE SELECT json_build_object(
  'product_id', 1,
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
WHERE product_id = 1;

-- related endpoint
EXPLAIN ANALYZE SELECT json_agg(related_id)
AS data
FROM related
WHERE product_id = 1;