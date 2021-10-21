"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsToMany(models.Tag, {
        through: "ProductTags",
        foreignKey: 'tagId',
      })
      Product.belongsToMany(models.Order, {
        through: "ProductTags",
        foreignKey: 'orderId',
      })
    }
  }
  Product.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  )
  return Product
}
