const models = require("../models")

const products = async () => {
  // get all products
  const products = await models.Product.findAll({
    include: {
      model: models.Tag
    }
  })

  for (const product of products) {
    console.log(product.toJSON())
  }

  await models.sequelize.close()
}

products()
