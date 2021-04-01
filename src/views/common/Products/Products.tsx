import { PATH } from '@/config'
import { Products as ProductsType } from '@/interfaces'
import { Link } from '@/components'
import ProductCard from './ProductCard'
import styles from './products.module.scss'

interface Props {
  products?: ProductsType
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
                product: product.id,
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
