const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/products');

const ProductSchema = new mongoose.Schema({
  id: String,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
  features: {
    type: [FeatureSchema],
    default: undefined
  },
  styles: {
    type: [StyleSchema],
    default: undefined
  }
});

const FeatureSchema = new mongoose.Schema({
  feature: String,
  value: String
});

const StyleSchema = new mongoose.Schema({
  name: String,
  original_price: String,
  sale_price: String,
  default: Boolean,
  photos: {
    type: [PhotoSchema],
    default: undefined
  },
  skus: {
    type: [SkuSchema],
    default: undefined
  }
});

const PhotoSchema = new mongoose.Schema({
  thumbnail_url: String,
  url: String
});

const SkuSchema = new mongoose.Schema({
  sku_num: String,
  quantity: Number,
  size: String
});

const Product = mongoose.model('Product', ProductSchema);
