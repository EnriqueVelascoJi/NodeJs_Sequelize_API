const express = require('express');
const router = express.Router();

const controllerUser = require('../controllers/UserController');

router.get('/', controllerUser.getUsers);
router.post('/', controllerUser.createUser);

//Ver la dirección de un usuario
router.get('/:email/address', controllerUser.getUserAddress);

//Ver los posts de un usuario
router.get('/:email/posts', controllerUser.getUserPosts);

module.exports = router;