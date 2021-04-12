import { Product as ProductType } from '@/interfaces'
import AddToCart from './AddToCart'
import styles from './product.module.scss'
import Picture from './Picture'
import Params from './Params'
import Bread from './Bread'

interface Props {
  product: ProductType
}

const Product = (props: Props) => {
  const { product } = props

  return (
    <div className={styles.wrapper}>
      <Bread className={styles.bread} />
      <Picture className={styles.picture} images={product.images} />
      <Params className={styles.params} product={product} />
      <AddToCart />
    </div>
  )
}

export default Product
