import { Product } from '@/interfaces'
import { Typography, ProductCard } from '@/components'
import { declareNumber } from '@/utils'

import styles from './items.module.scss'

interface Props {
  products?: Product[]
}

const Items = (props: Props) => {
  const { products } = props

  if (!products) return null
  return (
    <>
      <Typography.Title level={4}>Товары</Typography.Title>
      <Typography.Title level={5} weight="regular">
        {products.length}{' '}
        {declareNumber(products.length, [`товар`, `товара`, `товаров`])}
      </Typography.Title>
      <div className={styles.products}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default Items
