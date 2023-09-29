const express = require('express');

const contactController = require('../conrollers/contact');

const router = express.Router();

// /contactus => GET
router.get('/contactus', contactController.getContact);

// /contactus => POST
router.post('/contactus', contactController.postContact);

router.get('/success', contactController.getSuccess);

module.exports = router;