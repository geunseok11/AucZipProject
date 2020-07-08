'use strict';


module.exports = (sequelize, DataTypes) => {
  const userBuilding = sequelize.define('userBuilding', {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: "id"
    },
      allowNull: false
    },
    buildingId: {
      type: DataTypes.INTEGER,
      references: {
          model: 'Buildings',
          key: "id"
      },
      allowNull: false
    },
    userInvest: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  userBuilding.associate = function(models) {
    // associations can be defined here
    userBuilding.belongsTo(models.Users, { foreignKey: 'userId' 
      , onDelete: "cascade"})
    userBuilding.belongsTo(models.Buildings, { foreignKey: 'BuildingId' 
      , onDelete: "cascade"})
  };
  return userBuilding;
};