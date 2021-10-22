"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.Customer, { foreignKey: 'customerId'})
      Order.belongsToMany(models.Product, {
        through: 'OrderProducts',
        foreignKey: 'orderId'
      })
      Order.hasMany(models.Payment, {foreignKey: 'orderId'})
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
