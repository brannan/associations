'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'OrderProducts',
      {
        orderId: {
          type: Sequelize.UUID,
          primaryKey: true,
          references: {
            model: 'Orders',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        },
        productId: {
          type: Sequelize.UUID,
          primaryKey: true,
          references: {
            model: 'Products',
            key: 'id',
          },
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('OrderProducts')
  },
}
