"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      Customer.hasMany(models.Order, { foreignKey: "customerId" })
    }
  }
  Customer.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      address: DataTypes.TEXT,
      phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Customer",
    }
  )
  return Customer
}
