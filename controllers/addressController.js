const Address = require('../models/Address');
const User = require('../models/User');

exports.getAddress = async (req, res, next) => {

    try {
        await Address.findAll({
            include: {
                model: User
            }
        }).then(addresses => {
            res.json(addresses);
        });
    } catch (error) {
        console.log(error);
        next();
    }
}