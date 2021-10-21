const { Sequelize, DataTypes } = require("sequelize")
const config = require("../config/config.json")
const models = require("../models")

console.log(`connecting to ${config.development.database}`)
const sequelize = new Sequelize(config.development)
const queryInterface = sequelize.getQueryInterface()

const { ORDERS } = require('../utils/sampleData')
const d = new Date()

const orderProducts = async () => {
  //await models.sequelize.sync()
  const orders = await models.Order.findAll()
  await orders[0].createProduct({
    name: 'widget 1',
    description: 'confabulates regulated defibrulons 1',
    createdAt: d,
    updatedAt: d,
  })
  await orders[0].createProduct({
    name: 'widget 2',
    description: 'deconfabulates regulated defibrulons 2',
    createdAt: d,
    updatedAt: d,
  })
  console.log(`order[0] has ${await orders[0].countProducts()} products`)

  const products = await orders[0].getProducts()
  console.log(`orders[0].getProducts() returned ${products.length} products`)
  console.log(`orders[0] first product description: "${products[0].description}"`)

  // sets payment.OrderId null in db but does not delete the payment
  // await orders[0].removeProducts(products)

  // OrderId was set to null above
  // await queryInterface.bulkDelete("Products", { OrderId: id })
}


orderProducts()
