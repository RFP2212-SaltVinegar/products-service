const router = require('express').Router();
const controllers = require('./controllers.js');

router.get('/', controllers.getProducts);
router.get('/:product_id', controllers.getProduct);
router.get('/:product_id/styles', controllers.getProductStyles);
router.get('/:product_id/related', controllers.getRelatedProducts);