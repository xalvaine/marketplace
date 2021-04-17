import { Products as ProductsType } from '@/interfaces'
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
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default Products
