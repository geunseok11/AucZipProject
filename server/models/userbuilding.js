'use strict';
const User = require('./user');
const Building = require('./building');

module.exports = (sequelize, DataTypes) => {
  const userBuilding = sequelize.define('userBuilding', {
    // userId: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: User,
    //     key: "id"
    // },
    //   allowNull: false
    // },
    // buildingId: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //       model: Building,
    //       key: "id"
    //   },
    //   allowNull: false
    // },
    userInvest: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  userBuilding.associate = function(models) {
    // associations can be defined here
    userBuilding.belongsTo(models.User, { foreignKey: 'userId' 
      , onDelete: "cascade"})
    userBuilding.belongsTo(models.Building, { foreignKey: 'BuildingId' 
      , onDelete: "cascade"})
  };
  return userBuilding;
};