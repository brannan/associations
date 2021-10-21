const { Sequelize, DataTypes } = require("sequelize")
const config = require("../config/config.json")
const models = require("../models")
const { v4: uuidv4 } = require("uuid")

console.log(`connecting to ${config.development.database}`)
const sequelize = new Sequelize(config.development)

const d = new Date()

const productTags = async () => {
  // Lets add a tag
  const newTag = await models.Tag.create({
    name: 'New Tag',
    createdAt: d,
    updatedAt: d
  })

  // what tags do we have
  const tags = await models.Tag.findAll()
  tags.forEach(tag => {
    console.log(`Tag: ${tag.name}`)
  })

  const id = uuidv4()
  const productOne = await models.Product.create({
    id: id,
    name: `Widget - ${id}`,
    description: `Confabulates regulated defibrulons ${id}`,
    createdAt: d,
    updatedAt: d,
  })
  console.log(`Product One: ${productOne.id} - ${productOne.name}`)

  productOne.addTags(tags)

  const fetchedTags = await productOne.getTags();
  console.log(`fetched ${fetchedTags.length} tags for productOne`)
  sequelize.close()
}

productTags()
