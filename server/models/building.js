'use strict';
module.exports = (sequelize, DataTypes) => {
  const Building = sequelize.define('Building', {
    b_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: DataTypes.STRING,
    b_address: DataTypes.STRING,
    b_invest: DataTypes.INTEGER,
    b_invest_goal: DataTypes.INTEGER,
    b_people : DataTypes.STRING,
    b_info : DataTypes.STRING,
    b_location : DataTypes.STRING,
  }, {});
  Building.associate = function(models) {
    // associations can be defined here
    Building.hasMany(models.userBuilding, { foreignKey: 'id' })
    };
  return Building;
};