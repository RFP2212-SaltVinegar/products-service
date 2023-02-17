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

CREATE TABLE features (
  id INTEGER PRIMARY KEY,
  product_id INTEGER REFERENCES products(id),
  feature TEXT,
  value TEXT
);

CREATE TABLE styles (
  id INTEGER PRIMARY KEY,
  product_id INTEGER REFERENCES products(id),
  name TEXT,
  original_price TEXT,
  sale_price TEXT,
  isDefault boolean
);

CREATE TABLE photos (
  id INTEGER PRIMARY KEY,
  style_id INTEGER REFERENCES styles(id),
  thumbnail_url TEXT,
  url TEXT
);

CREATE TABLE skus (
  id INTEGER PRIMARY KEY,
  style_id INTEGER REFERENCES styles(id),
  sku_num TEXT,
  quantity INTEGER,
  size TEXT
);

CREATE TABLE related (
  id INTEGER PRIMARY KEY,
  product_id INTEGER,
  related_id INTEGER
);