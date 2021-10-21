"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      Payment.belongsTo(models.Order, {
        foreignKey: 'orderId',
      })
    }
  }
  Payment.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      amount: DataTypes.DECIMAL,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Payment",
    }
  )
  return Payment
}
