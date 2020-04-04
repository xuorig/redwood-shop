import Product from 'src/components/Product'

export const QUERY = gql`
  query FIND_POST_BY_ID($id: Int!) {
    product: product(id: $id) {
      id
      name
      description
      price_cents
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Product not found</div>

export const Success = ({ product }) => {
  return <Product product={product} />
}
