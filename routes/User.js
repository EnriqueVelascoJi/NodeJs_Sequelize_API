const express = require('express');
const router = express.Router();

const controllerUser = require('../controllers/UserController');

router.post('/', controllerUser.createUser);

module.exports = router;