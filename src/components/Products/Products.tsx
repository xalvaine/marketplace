import { useProducts } from '@/hooks'
import styles from './products.module.scss'
import { Typography } from '@/components/common'
import Carousel from './Carousel'

const Products = () => {
  const { data: products } = useProducts()

  return (
    <>
      <Carousel />
      <Typography.Title level={4}>Подборки недели</Typography.Title>
      <p>Всего продуктов: {products?.length}</p>
      <div className={styles.wrapper}>
        {products?.map((product) => (
          <div key={product.id} className={styles.product}>
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
