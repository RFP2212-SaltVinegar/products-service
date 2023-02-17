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

COPY products (id, name, slogan, description, category, default_price) FROM '/Users/donnawong/products-service/server/data/products.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE features (
  id INTEGER PRIMARY KEY,
  product_id INTEGER,
  feature TEXT,
  value TEXT
);

COPY features (id, product_id, feature, value) FROM '/Users/donnawong/products-service/server/data/features.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE styles (
  id INTEGER PRIMARY KEY,
  product_id INTEGER,
  name TEXT,
  sale_price TEXT,
  original_price TEXT,
  default_style boolean
);

COPY styles (id, product_id, name, sale_price, original_price, default_style) FROM '/Users/donnawong/products-service/server/data/styles.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE photos (
  id INTEGER PRIMARY KEY,
  style_id INTEGER,
  thumbnail_url TEXT,
  url TEXT
);

COPY photos (id, style_id, thumbnail_url, url) FROM '/Users/donnawong/products-service/server/data/photos.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE skus (
  id INTEGER PRIMARY KEY,
  style_id INTEGER,
  size TEXT,
  quantity INTEGER
);

COPY skus (id, style_id, size, quantity) FROM '/Users/donnawong/products-service/server/data/skus.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE related (
  id INTEGER PRIMARY KEY,
  product_id INTEGER,
  related_id INTEGER
);

COPY related (id, product_id, related_id) FROM '/Users/donnawong/products-service/server/data/related.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE cart (
  id INTEGER PRIMARY KEY,
  user_session TEXT,
  product_id VARCHAR(50),
  active VARCHAR(2)
);

COPY cart (id, user_session, product_id, active) FROM '/Users/donnawong/products-service/server/data/cart.csv' DELIMITER ',' CSV HEADER;