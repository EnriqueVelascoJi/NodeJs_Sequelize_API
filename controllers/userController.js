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