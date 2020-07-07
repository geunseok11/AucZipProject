'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    memberId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    money: DataTypes.INTEGER,
    bankName: {
      type:DataTypes.STRING,
    },  
    bankNum: DataTypes.STRING,
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    // User.hasMany(models.userBuilding, { foreignKey: 'userId' } )
  };
  return User;
};