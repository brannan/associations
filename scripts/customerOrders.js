const models = require("../models")

const { UUIDS } = require("../utils/sampleData")

const productTags = async () => {
  // get a customer with order
  const customer = await models.Customer.findByPk(UUIDS[0], {
    include: [
      {
        model: models.Order,
        include: [models.Product],
      },
    ],
  })
  console.log(customer.toJSON())

  await models.sequelize.close()
}

productTags()
