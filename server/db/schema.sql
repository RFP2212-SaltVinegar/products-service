DROP DATABASE IF EXISTS products;
CREATE DATABASE products;

\c products;

CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  name TEXT,
  slogan TEXT,
  description TEXT,
  category TEXT,
  default_price TEXT
);

CREATE INDEX idx_product_id ON products(id);
COPY products (id, name, slogan, description, category, default_price) FROM '/Users/donnawong/products-service/server/data/products/clean-products.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE features (
  id INTEGER PRIMARY KEY,
  product_id INTEGER REFERENCES products(id),
  feature TEXT,
  value TEXT
);

CREATE INDEX feature_product_id ON features(product_id);
COPY features (id, product_id, feature, value) FROM '/Users/donnawong/products-service/server/data/features/clean-features.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE styles (
  id INTEGER PRIMARY KEY,
  product_id INTEGER REFERENCES products(id),
  name TEXT,
  sale_price TEXT,
  original_price TEXT,
  default_style boolean
);

CREATE INDEX style_product_id ON styles(product_id);
COPY styles (id, product_id, name, sale_price, original_price, default_style) FROM '/Users/donnawong/products-service/server/data/styles/clean-styles.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE photos (
  id INTEGER PRIMARY KEY,
  style_id INTEGER REFERENCES styles(id),
  thumbnail_url TEXT,
  url TEXT
);

CREATE INDEX photos_style_id ON photos(style_id);
COPY photos (id, style_id, thumbnail_url, url) FROM '/Users/donnawong/products-service/server/data/photos/clean-photos.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE skus (
  id INTEGER PRIMARY KEY,
  style_id INTEGER REFERENCES styles(id),
  size TEXT,
  quantity INTEGER
);

CREATE INDEX skus_style_id ON skus(styles_id);
COPY skus (id, style_id, size, quantity) FROM '/Users/donnawong/products-service/server/data/skus/clean-skus.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE related (
  id INTEGER PRIMARY KEY,
  product_id INTEGER,
  related_id INTEGER
);

CREATE INDEX related_product_id ON related(product_id);
COPY related (id, product_id, related_id) FROM '/Users/donnawong/products-service/server/data/related/clean-related.csv' DELIMITER ',' CSV HEADER;