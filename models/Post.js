const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db')

class Post extends Model {}

Post.init({
  
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  body: {
    type: DataTypes.TEXT
    // allowNull defaults to true
  }
}, {
  
  sequelize,
  modelName: 'Post',
  timestamps: false

});

module.exports = Post;