'use strict';
module.exports = (sequelize, DataTypes) => {
  const Building = sequelize.define('Building', {
    b_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: DataTypes.STRING,
    b_address: DataTypes.STRING,
    b_evaluation: DataTypes.INTEGER, 
    b_invest: DataTypes.INTEGER,
    b_invest_goal: DataTypes.INTEGER,
    b_invest_user_num : DataTypes.INTEGER,
    b_info : DataTypes.STRING,
    b_location : DataTypes.STRING,
    b_use : DataTypes.STRING,
    b_size : DataTypes.STRING,
    b_due : DataTypes.STRING,
    b_views : DataTypes.STRING,
    b_invest_start_date: DataTypes.DATE,
    b_invest_end_date:DataTypes.DATE,
  }, {});
  Building.associate = function(models) {
    // associations can be defined here
    Building.hasMany(models.userBuilding, { foreignKey: 'BuildingId' })
    };
  return Building;
};