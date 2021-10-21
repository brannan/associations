# Sequelize Associations

https://medium.com/@andrewoons/how-to-define-sequelize-associations-using-migrations-de4333bf75a7

## Models

- tags

  `yarn sequelize-cli model:generate --name Tag --attributes name:string`

- products

  `yarn sequelize-cli model:generate --name Product --attributes name:string, description:string`

- orders

  `yarn sequelize-cli model:generate --name Order --attributes orderNotes:text`

- customers

  `yarn sequelize-cli model:generate --name Customer --attributes firstName:string,lastName:string,address:text`

- payments

  `yarn sequelize-cli model:generate --name Payment --attributes amount:float`

- associations

  `yarn sequelize-cli migration:generate --name add-associations`

  `yarn sequelize-cli migration:generate --name associate-product-tag`

- seeders

  Create seed file: `yarn db:seeds demo-customer`

  Try a seed: `yarn db:seeds`


## Many to Many Examples

### sequelize-tinker

```
// const uuids = [  "8aac6962-97f4-470e-b95b-caf0c825da48", "bb8f6b6b-4f4a-4bf2-9f07-60bc0b10d476","1db9431e-0c77-41b9-af7f-88cb9754f1bb",  "77f9365e-ec8b-4394-af6b-b1a2fc698f17", "36ee2c50-5113-4db8-aa6f-9d35c4895104" ]

const uuids = [  "8aac6962-97f4-470e-b95b-caf0c825da48", "bb8f6b6b-4f4a-4bf2-9f07-60bc0b10d476" ]
const orderOne = Order.findByPk(uuids[0])
Order.hasMany(Payment)
Payment.belongsTo(Order)
Payment.create({OrderId: uuids[0], status: 'processing', amount: 99.99})

const productOne = Product.findByPk(uuids[0])
const tagOne = Product.findByPk(uuids[0])
```

## Refactor Example

Add LineItem association, make relationship between Product and Order many-to-many.

1. Undo the migration (see package.json):

  `yarn db:migrate:undo:all`

1. Make a migration file:

  `yarn sequelize-cli migration:generate --name associate-order-product`

  See `xxx-associate-order-product.js` for association table definition.

1. Add associations to Order and Product models.

  ```
  Product.belongsToMany(models.Order, {
      through: "ProductTags",
      foreignKey: orderId,
    })
  ```

  ```
  Order.belongsToMany(models.Product, {
      through: "ProductTags",
      foreignKey: productId,
    })
  ```

1. Test migration then undo.