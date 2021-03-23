import { useProducts } from '@/hooks'
import styles from './products.module.scss'

const Products = () => {
  const { data: products } = useProducts()

  return (
    <>
      <p>Всего продуктов: {products?.length}</p>
      <div className={styles.wrapper}>
        {products?.map((product) => (
          <div className={styles.product}>
            <p>id: {product.id}</p>
            <p>name: {product.name}</p>
            <p>brand_name: {product.brand_name}</p>
            <p>description: {product.description}</p>
            <p>origin: {product.origin}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Products
