const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db');

class User extends Model {}

User.init({
  
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull : {
        msg: "El campo es obligatorio"
      },
      isAlpha: {
        args: true,
        msg: "El nombre solo puede contener letras"
      },
      len: {
        args: [3, 255],
        msg: "El nombre tiene que ser enntre 3 y 255 caracteres"
      }
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail : {
        args: true,
        msg: "El campo debe ser un email válido"
      }
    }
  },
  age: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isInt: {
        args: true,
        msg: "La edad ingresada debe ser un núemro"
      },
      min: {
        args: 1,
        msg: "La edad tiene que ser mayor o igual que uno"
      },
      max: {
        args: 150,
        msg: "La edad no sopotya número mayores a 150"
      },
      esPar(value) {

        if(value % 2 ) {
          throw new Error("La edad tiene que ser número par")
        }
      }
    }
  },
  role: {

    //1 para administrador y 0 para usuario final
    type: DataTypes.INTEGER,
    defaultValue: 0
  }

}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});

module.exports = User;