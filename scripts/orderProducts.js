const models = require("../models")

const orderProducts = async () => {
  // get all orders
  const orders = await models.Order.findAll({
    // include: [
    //   {
    //     model: models.Product,
    //   },
    // ],
  })
  
  orders.forEach(order => {
    console.log(order.toJSON())
  });

  await models.sequelize.close()
}

orderProducts()
