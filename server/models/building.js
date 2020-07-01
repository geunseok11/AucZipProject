'use strict';
module.exports = (sequelize, DataTypes) => {
  const Building = sequelize.define('Building', {
    b_name: DataTypes.STRING,
    image: DataTypes.STRING,
    b_address: DataTypes.STRING,
    b_invest: DataTypes.INTEGER,
  }, {});
  Building.associate = function(models) {
    // associations can be defined here
  };
  return Building;
};