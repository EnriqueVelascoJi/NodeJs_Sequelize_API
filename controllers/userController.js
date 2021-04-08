const Address = require('../models/Address');
const Post = require('../models/Post');
const User = require('../models/User');


//Crear 
exports.createUser = async (req, res, next) => {

    const {name, email, age, street} = req.body;
    const newUser = {
        name,
        email,
        age
    };
    
    
    try {
        await User.create(newUser)
        .then(user => {
            Address.create({street})
            .then( street => {
                user.setAddress(street)
                .then(result => {
                    res.json(user);
                });
            });
        })
        .catch(error => res.json(error));
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.getUsers = async (req, res, next) => {

    try {
        await User.findAll({
            include: [{
                model: Address,
                attributes: ['street']
            },
            {
                model: Post,
                attributes: ['title', 'body'],
                where: {
                    title: "Foo"
                }
            }
            ],
            attributes: ['name', 'age'],
            
        }).then(users => {
            res.json(users);
        });
        
    } catch (error) {
        console.log(error);
        next();
    }
}


//Ver la dirección del usuario 
exports.getUserAddress = async (req, res, next) => {

    const emailUser = req.params.email;
    const addressUser = req.params.address;

    try {
       await User.findByPk(emailUser).then(user => {
           user.getAddress().then(addres => {
               res.json(addres);
           });
       });
    } catch (error) {
        console.log(error);
        next();
    }
}

//Obtener las publicaciones de un usuario
exports.getUserPosts = async (req, res, next) => {

    const emailUser = req.params.email;
    const posts = req.params.posts;

    try {
        await User.findByPk(emailUser).then(user => {
            user.getPosts().then(posts => {
                res.json(posts);
            });
        });
    } catch (error) {
        console.log(error);
        next();
    }
}