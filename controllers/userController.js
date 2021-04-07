const Address = require('../models/Address');
const User = require('../models/User');

exports.createUser = async (req, res, next) => {

    const newUser = req.body;

    try {
        await User.create(newUser)
        .then(user => res.json(user))
        .catch(error => res.json(error));
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.getUsers = async (req, res, next) => {

    try {
        await User.findAll({
            include: {
                model: Address,
                attributes: ['street']
            },
            attributes: ['name', 'age'],
            
        }).then(users => {
            res.json(users);
        });
        
    } catch (error) {
        console.log(error);
        next();
    }
}