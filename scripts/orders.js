const models = require("../models")

const orders = async () => {

  const orders = await models.Order.findAll({
    include: {
      model: models.Product
    }
  })

  for (const order of orders){
    console.log(order.toJSON())
  }

  await models.sequelize.close()
}

orders()
