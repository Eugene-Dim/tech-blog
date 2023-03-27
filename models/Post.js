const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Post = sequelize.define('post', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(25),
    allowNull: false,
    unique: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id'
    },
  }
}, {
  timestamps: true,
  freezeTableName: true,
  underscored: true,
});

module.exports = Post;
