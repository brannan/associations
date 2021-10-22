const { Sequelize, DataTypes } = require("sequelize")
const { v4: uuidv4 } = require("uuid")
const config = require("../config/config.json")
const models = require("../models")

const newPayments = [
  {
    id: uuidv4(),
    amount: 499.99,
    status: "pending",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    amount: 799.99,
    status: "pending",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

const orderPayments = async () => {
  //await models.sequelize.sync()
  const orders = await models.Order.findAll()
  const order = orders[1]
  console.log(`order ${order.id} has ${await order.countPayments()} payments`)
  await order.createPayment(newPayments[0])
  await order.createPayment(newPayments[1])
  console.log(`order ${order.id} has ${await order.countPayments()} payments`)

  const payments = await orders[0].getPayments()
  console.log(`orders[0].getPayments() returned ${payments.length} payments`)
  console.log(` first payment was ${payments[0].amount}`)

  // sets payment.OrderId null in db but does not delete the payment
  //await orders[0].removePayments(payments)

  // OrderId was set to null above
  //deletePayments(null)
  await models.sequelize.close()
}

const deletePayments = async (id) => {
  await queryInterface.bulkDelete("Payments", { OrderId: id })
}

orderPayments()
