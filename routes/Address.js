const express = require('express');
const router = express.Router();

const addressController = require('../controllers/addressController');

router.get('/', addressController.getAddress);

module.exports = router;