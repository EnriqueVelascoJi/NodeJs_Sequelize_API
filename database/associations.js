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

//Relación 1:N
//Usuario va a tner muchos posts o publicaciones
//Se añade una clave email del usuario a la tabla post
User.hasMany(Post, {
    foreignKey: {
        name: 'emailUser'
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Post.belongsTo(User, {
    foreignKey: {
        name: 'emailUser'
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});