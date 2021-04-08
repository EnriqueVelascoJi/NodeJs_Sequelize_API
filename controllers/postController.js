const Post = require('../models/Post');
const User = require('../models/User');

exports.createPost = async (req, res, next) => {

    const newPost = req.body;
    
    try {
        await Post.create(newPost).
        then(post => {
            res.json({
                message: "User created successfully",
                userCrated: post
            });
        });
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.getPosts = async (req, res, next) => {

    
    try {
        await Post.findAll({
            include: {
                model: User, 
            }
        }).then(posts => {
            res.json(posts);
        })
        
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.getPost = async (req, res, next) => {

    const postId = req.params.postId;
    
    try {
        
        const post = await Post.findByPk(postId).
                then(post => {
                    return post.dataValues;
                });
        res.json(post);
    } catch (error) {
        console.log(error);
        next();
    }

}

exports.updatePost = async (req, res, next) => {

    const postId = req.params.postId;
    const postToUpdate = req.body;

    try {
        const idPostUpdated = await Post.update(
            postToUpdate,
            {
                where: {
                    id: postId
                }
            }
        ).then(id => parseInt(id));
        
        res.json({
            message: "Post updated successfully",
            columnsModified: idPostUpdated
        });

    } catch (error) {
        console.log(error);
        next();
    }
}

exports.deletePost = async (req, res, next) => {

    const idToDelete = req.params.postId;
    
    try {
        const idPostDeleted = await Post.destroy({
            where: {
                id: idToDelete
            }
        }).then(id => parseInt(id));

        res.json({
            message: "Post deleted successfully",
            columnsModified: idPostDeleted
        });

    } catch (error) {
        console.log(error);
        next();
    }
}

