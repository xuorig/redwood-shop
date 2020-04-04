export const schema = gql`
  type Product {
    id: Int!
    name: String!
    description: String!
    price_cents: Int!
    createdAt: DateTime!
  }

  type Query {
    products: [Product]
    product(id: Int!): Product
  }

  input ProductInput {
    name: String
    description: String
    price_cents: Int
  }

  type Mutation {
    createProduct(input: ProductInput!): Product
    updateProduct(id: Int!, input: ProductInput!): Product
    deleteProduct(id: Int!): Product
  }
`
