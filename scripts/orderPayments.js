const { Sequelize, DataTypes } = require("sequelize")
const config = require("../config/config.json")
const models = require("../models")

const { PAYMENTS } = require('../utils/sampleData')

console.log(`connecting to ${config.development.database}`)
const sequelize = new Sequelize(config.development)
const queryInterface = sequelize.getQueryInterface()

const orderPayments = async () => {
  //await models.sequelize.sync()
  const orders = await models.Order.findAll()
  await orders[0].createPayment(PAYMENTS[0])
  await orders[0].createPayment(PAYMENTS[1])
  console.log(`order[0] has ${await orders[0].countPayments()} payments`)

  const payments = await orders[0].getPayments()
  console.log(`orders[0].getPayments() returned ${payments.length} payments`)
  console.log(` first payment was ${payments[0].amount}`)

  // sets payment.OrderId null in db but does not delete the payment
  //await orders[0].removePayments(payments)

  // OrderId was set to null above
  //deletePayments(null)
}

const deletePayments = async (id) => {
  await queryInterface.bulkDelete("Payments", { OrderId: id })
}

orderPayments()

