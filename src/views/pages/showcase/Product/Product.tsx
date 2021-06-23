import { Product as ProductType } from '@/interfaces'
import { useState } from 'react'
import styles from './product.module.scss'
import Picture from './Picture'
import Params from './Params'
import Bread from './Bread'
import Description from './Description'

interface Props {
  product: ProductType
}

const Product = (props: Props) => {
  const { product } = props
  const [selectedVariant, setSelectedVariant] = useState<number>(
    product.variants[0].id,
  )

  return (
    <div className={styles.wrapper}>
      <Bread className={styles.bread} />
      <Picture className={styles.picture} images={product.images} />
      <Params
        className={styles.params}
        product={product}
        selectedVariant={selectedVariant}
        setSelectedVariant={setSelectedVariant}
      />
      <Description className={styles.description} product={product} />
    </div>
  )
}

export default Product
