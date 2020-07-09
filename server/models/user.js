'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
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
  Users.associate = function(models) {
    // associations can be defined here
    Users.hasMany(models.userBuilding, { foreignKey: 'userId' } )
  };
  return Users;
};