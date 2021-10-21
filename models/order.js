"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.Customer, { foreignKey: 'customerId'})
      Order.belongsToMany(models.Product, {
        through: 'ProductTags',
        foreignKey: 'productId'
      })
      Order.hasMany(models.Payment)
    }
  }
  Order.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      status: DataTypes.STRING,
      notes: DataTypes.TEXT,
      invoiceNumber: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Order",
    }
  )
  return Order
}
