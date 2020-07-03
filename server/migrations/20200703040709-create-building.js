'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Buildings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      b_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING
      },
      b_address: {
        type: Sequelize.STRING
      },
      b_invest: {
        type: Sequelize.INTEGER
      },
      b_invest_goal: {
        type: Sequelize.INTEGER
      },
      b_invest_user_num : {
        type: Sequelize.INTEGER
      },
      b_info : {
        type: Sequelize.STRING
      },
      b_location : {
        type: Sequelize.STRING
      },
      b_invest_start_date:{
        type: Sequelize.DATE
      },
      b_invest_end_date:{
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Buildings');
  }
};


