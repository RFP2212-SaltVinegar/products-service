DROP DATABASE IF EXISTS products;
CREATE DATABASE products;

\c products;

CREATE TABLE products {
  id SERIAL PRIMARY KEY,
  name TEXT,
  slogan TEXT,
  description TEXT,
  category TEXT,
  default_price TEXT
};

CREATE TABLE features {
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(id),
  feature TEXT,
  value TEXT,
}

CREATE TABLE styles {
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(id),
  name TEXT,
  original_price TEXT,
  sale_price TEXT,
  default boolean,
}

CREATE TABLE photos {
  id SERIAL PRIMARY KEY,
  style_id INTEGER REFERENCES styles(id),
  thumbnail_url TEXT,
  url TEXT
}

CREATE TABLE skus {
  id SERIAL PRIMARY KEY,
  style_id INTEGER REFERENCES styles(id),
  sku_num TEXT,
  quantity INTEGER,
  size TEXT,
}

CREATE TABLE related {
  id SERIAL PRIMARY KEY,
  product_id INTEGER,
  related_id INTEGER
}

CREATE TABLE cart {
  sku_id TEXT REFERENCES skus(sku_num)
  count INTEGER
}