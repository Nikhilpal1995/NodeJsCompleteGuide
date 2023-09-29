const express = require('express');

const productController = require('../conrollers/product')

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productController.getProduct);

// /admin/add-product => POST
router.post('/add-product', productController.postProduct);

module.exports = router;
