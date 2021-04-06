const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db');

class User extends Model {}

User.init({
  
//   id: { 
//       type: DataTypes.INTEGER,
//       primaryKey : true,
//       autoIncrement: true,
//   },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthday: {
    type: DataTypes.DATE
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});

module.exports = User;