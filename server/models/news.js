'use strict';
module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define('News', {
    title: DataTypes.STRING,
    day: DataTypes.STRING,
    descriptionUrl: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    text: DataTypes.STRING,
  }, {});
//   News.associate = function(models) {
//     // associations can be defined here
//     News.hasMany(models., { foreignKey: '' } )
//   };
  return News;
};