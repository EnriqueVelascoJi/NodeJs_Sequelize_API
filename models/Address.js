const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db');
const User = require('./User');

class Address extends Model {}

Address.init({
  
   street: {
       type: DataTypes.STRING,
       allowNull: false
   }
  
}, {
  
  sequelize,
  modelName: 'Addresses',
  timestamps: false

});

module.exports = Address;