const router = require('express').Router();
const controllers = require('./MVC/controllers.js');

router.get('/:product_id', controllers.getProduct);
router.get('/:product_id/styles', controllers.getProductStyles);
router.get('/:product_id/related', controllers.getRelatedProducts);

module.exports = router;