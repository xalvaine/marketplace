import { PATH } from '@/config'
import { Product } from '@/interfaces'
import { Link } from '@/components'
import ProductCard from './ProductCard'
import styles from './products.module.scss'

interface Props {
  products?: Product[]
}

const Products = (props: Props) => {
  const { products } = props

  if (!products) return null
  return (
    <>
      <div className={styles.products}>
        {products.map((product) => (
          <Link
            key={product.id}
            href={{
              pathname: PATH.PRODUCT,
              query: {
                product: `123`,
                category: `food`,
                group: `sweets`,
              },
            }}
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </>
  )
}

export default Products
