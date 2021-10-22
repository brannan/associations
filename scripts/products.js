const models = require("../models")

const products = async () => {
  // get all orders
  const products = await models.Product.findAll({
    include: [
      {
        model: models.Tag,
      },
    ],
  })
  
  products.forEach(product => {
    console.log(product.toJSON())
    tags = product.getTags()
    console.log(`${tags.length} tags found`)
  });

  await models.sequelize.close()
}

products()
