const { v4: uuidv4 } = require("uuid")

const UUIDS = [
  "781c4510-4867-4ee0-a880-3d7583a308cf",
  "15e46d00-ed94-428c-9a7d-ee3da10c48c4",
  "670e2a54-ad30-4ff0-a935-fea1b6b8d789",
  'bb5f9401-4690-49d4-a599-695e25a607c2',
  'd7fc0272-2787-4482-9874-dfe6b56c6b4d'
]

const customers = [
  {
    id: UUIDS[0],
    firstName: "Ernest",
    lastName: "Hemingway",
    address: "Oak Park, IL 60301",
    phone: "123-123-1234",
    createdAt: new Date(2020, 0, 1, 0),
    updatedAt: new Date(2020, 0, 1, 0),
  },
  {
    id: UUIDS[1],
    firstName: "William",
    lastName: "Faulkner",
    address: "Lafayette County, MS",
    phone: "123-123-1235",
    createdAt: new Date(2020, 0, 1, 1),
    updatedAt: new Date(2020, 0, 1, 1),
  },
  {
    id: UUIDS[2],
    firstName: "Hermann",
    lastName: "Hess",
    address: "A House, Calw, Germany",
    phone: "123-123-1236",
    createdAt: new Date(2020, 0, 1, 2),
    updatedAt: new Date(2020, 0, 1, 2),
  },
]

const products = [
  {
    id: uuidv4(),
    name: "widget 1",
    description: "confabulates regulated defibrulons 1",
    createdAt: new Date(2020, 0, 1, 1),
    updatedAt: new Date(2020, 0, 1, 1),
  },
  {
    id: uuidv4(),
    name: "widget 2",
    description: "deconfabulates regulated defibrulons 1",
    createdAt: new Date(2020, 0, 1, 1),
    updatedAt: new Date(2020, 0, 1, 1),
  },
]

const tags = [
  {
    id: uuidv4(),
    name: "Great Product 1",
    createdAt: new Date(2020, 0, 3, 12),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    name: "Great Product 2",
    createdAt: new Date(2020, 0, 3, 12),
    updatedAt: new Date(),
  },
]

const orders = [
  {
    id: uuidv4(),
    notes: "Order notes 1",
    status: "processing",
    invoiceNumber: "0002",
    customerId: customers[0].id,
    createdAt: new Date(2020, 0, 2, 2),
    updatedAt: new Date(2020, 0, 2, 2),
  },
  {
    id: uuidv4(),
    notes: "order notes 2",
    status: "processing",
    invoiceNumber: "0003",
    customerId: customers[0].id,
    createdAt: new Date(2020, 0, 2, 2),
    updatedAt: new Date(2020, 0, 2, 2),
  },
]

const payments = [
  {
    id: uuidv4(),
    amount: 99.99,
    status: "pending",
    orderId: orders[0].id,
    createdAt: new Date(2020, 0, 3, 12),
    updatedAt: new Date(2020, 0, 3, 12),
  },
  {
    id: uuidv4(),
    amount: 199.99,
    status: "pending",
    orderId: orders[0].id,
    createdAt: new Date(2020, 0, 3, 12),
    updatedAt: new Date(2020, 0, 3, 12),
  },
]

const productTags = [
  {
    productId: products[0].id,
    tagId: tags[0].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    productId: products[0].id,
    tagId: tags[1].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

const orderProducts = [
  {
    orderId: orders[0].id,
    productId: products[0].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    orderId: orders[0].id,
    productId: products[1].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

module.exports = {
  UUIDS,
  CUSTOMERS: customers,
  PRODUCTS: products,
  TAGS: tags,
  ORDERS: orders,
  PAYMENTS: payments,
  PRODUCT_TAGS: productTags,
  ORDER_PRODUCTS: orderProducts,
}
