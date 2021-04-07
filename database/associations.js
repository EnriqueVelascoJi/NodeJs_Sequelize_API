const { DataTypes } = require("Sequelize");

const Post = require('../models/Post');
const User = require('../models/User');
const Address = require('../models/Address');



//Relacion 1 a 1
//Un usuario tiene una dirección
//Añade una llave fornanea userId a la tabla addresses
User.hasOne(Address, { foreignKey: {
    name: 'emailUser'
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Address.belongsTo(User, { foreignKey: {
    name: 'emailUser'
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
//Añade una llave userId a la tabla adresses
// Address.belongsTo(User);