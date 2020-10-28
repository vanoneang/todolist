

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('file', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      path: {
        type: Sequelize.STRING({ length: 500 }),
        allowNull: false
      },
      type: {
        type: Sequelize.STRING({ length: 10 }),
        allowNull: false,
        defaultValue: 'LOCAL',
        comment: 'LOCAL 本地，REMOTE 远程'
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      extension: {
        type: Sequelize.STRING(50)
      },
      size: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      uuid: {
        type: Sequelize.STRING(40),
        allowNull: true
      },
      "createdAt": {
        "type": Sequelize.DATE,
        defaultValue: new Date(),
        "field": "create_time",
        "allowNull": false
      },
      "updatedAt": {
        "type": Sequelize.DATE,
        defaultValue: new Date(),
        "field": "update_time",
        "allowNull": false
      },
      "deletedAt": {
        "type": Sequelize.DATE,
        "field": "delete_time",
        "allowNull": true
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('file');
  }
};
