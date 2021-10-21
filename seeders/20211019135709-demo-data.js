"use strict"
const {
  CUSTOMERS,
  ORDERS,
  PRODUCTS,
  TAGS,
  PAYMENTS,
  PRODUCT_TAGS,
  ORDER_PRODUCTS
} = require("../utils/sampleData")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Order of add matters because of foreign keys
    await queryInterface.bulkInsert("Customers", CUSTOMERS)
    await queryInterface.bulkInsert("Tags", TAGS)
    await queryInterface.bulkInsert("Products", PRODUCTS)
    await queryInterface.bulkInsert("Orders", ORDERS)
    await queryInterface.bulkInsert("Payments", PAYMENTS)
    await queryInterface.bulkInsert("ProductTags", PRODUCT_TAGS)
    await queryInterface.bulkInsert("OrderProducts", ORDER_PRODUCTS)
  },

  down: async (queryInterface, Sequelize) => {
    // Order of deletion matters. Consider foreign keys.
    await queryInterface.bulkDelete("OrderProducts", null, {})
    await queryInterface.bulkDelete("ProductTags", null, {})
    await queryInterface.bulkDelete("Orders", null, {})
    await queryInterface.bulkDelete("Customers", null, {})
    await queryInterface.bulkDelete("Tags", null, {})
    await queryInterface.bulkDelete("Products", null, {})
    await queryInterface.bulkDelete("Payments", null, {})
  },
}
