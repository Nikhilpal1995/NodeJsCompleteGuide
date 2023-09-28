const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /contactus => GET
router.get('/contactus', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
});

// /contactus => POST
router.post('/contactus', (req, res, next) => {
  console.log(req.body);
  res.redirect('/success');
});

router.get('/success', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'success.html'));
});

module.exports = router;