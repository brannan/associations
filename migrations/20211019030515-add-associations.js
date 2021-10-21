"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Orders", "customerId", {
      type: Sequelize.UUID,
      references: {
        model: "Customers",
        key: "id",
      },
      onUpdate: "Cascade",
      onDelete: "SET NULL",
    })
    await queryInterface.addColumn("Payments", "orderId", {
      type: Sequelize.UUID,
      references: {
        model: "Orders",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Orders", "customerId")
    await queryInterface.removeColumn("Payments", "orderId")
  },
}
