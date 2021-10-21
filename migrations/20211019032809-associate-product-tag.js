"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ProductTags", {
      productId: {
        type: Sequelize.UUID,
        primaryKey: true,
        references: {
          model: "Products",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      tagId: {
        type: Sequelize.UUID,
        primaryKey: true,
        references: {
          model: "Tags",
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
      product_tags_unique: {
        fields: ['productId', 'tagId']
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("ProductTags")
  },
}
