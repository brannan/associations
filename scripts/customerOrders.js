const { Sequelize, DataTypes } = require("sequelize")
const config = require("../config/config.json")
const models = require("../models")

console.log(`connecting to ${config.development.database}`)

const { UUIDS } = require("../utils/sampleData")

const productTags = async () => {
  // get a customer with order
  const customer = await models.Customer.findByPk(UUIDS[0], {
    include: [ models.Order ],
  })
  console.log(customer.toJSON())
  //
}

productTags()
