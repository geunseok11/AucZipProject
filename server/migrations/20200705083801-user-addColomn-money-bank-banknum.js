'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return Promise.all([
    queryInterface.addColumn(
      'Users',
      'money',
      {
        type: Sequelize.INTEGER,
        defaultValue: 1000000,
      }
    ),
    queryInterface.addColumn(
      'Users',
      'bankName',
      {
        type: Sequelize.STRING
      }
    ),
    queryInterface.addColumn(
      'Users',
      'bankNum',
      {
        type: Sequelize.STRING,
      }
    ),
    ]);

  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Users', 'money'),
      queryInterface.removeColumn('Users', 'bankName'),
      queryInterface.removeColumn('Users', 'bankNum'),
    ]);
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
