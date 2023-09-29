const express = require('express');

const shopController = require('../conrollers/shop')

const router = express.Router();

router.get('/', shopController.shopController);

module.exports = router;
