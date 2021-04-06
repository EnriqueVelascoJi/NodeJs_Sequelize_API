const express = require('express');
const postController = require('../controllers/postController');

//Creamos el enrutador
const router = express.Router();


//CREATE
router.post('/', postController.createPost);

//READ
router.get('/', postController.getPosts);

//READ AN ESPECIFIC POST
router.get('/:postId', postController.getPost);

//UPDATE
router.put('/:postId', postController.updatePost);

//DELETE
router.delete('/:postId', postController.deletePost);

module.exports = router;