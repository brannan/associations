'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      status: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.TEXT
      },
      invoiceNumber: Sequelize.TEXT,
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
  down: async (queryInterface, Sequelize) => {
    //await queryInterface.removeConstraint("OrderProducts", "OrderProducts_orderId_fkey")
    // await queryInterface.removeConstraint("OrderProducts", "OrderProducts_productId_fkey")
    await queryInterface.dropTable('Orders');
  }
};