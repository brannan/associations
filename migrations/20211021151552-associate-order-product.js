'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("OrderProducts", {
      orderId: {
        type: Sequelize.UUID,
        primaryKey: true,
        references: {
          model: "Orders",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      productId: {
        type: Sequelize.UUID,
        primaryKey: true,
        references: {
          model: "Products",
          key: "id",
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }, {
      uniqueKeys: {
        order_products_unique: {
          fields: ['orderId', 'productId']
        }
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    //await queryInterface.removeConstraint("OrderProducts", "OrderProducts_orderId_fkey")
    //await queryInterface.removeConstraint("OrderProducts", "OrderProducts_productId_fkey")
    await queryInterface.dropTable("OrderProducts")
  },
};
