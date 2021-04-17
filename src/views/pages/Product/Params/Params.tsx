import { Typography } from '@/components'
import { Product } from '@/interfaces'
import classNames from 'classnames'
import styles from './params.module.scss'
import Variations from './Variations'
import AddToCart from './AddToCart'

interface Props {
  product: Product
  className?: string
}

const Params = (props: Props) => {
  const { product, className } = props

  return (
    <div className={styles.wrapper}>
      <Typography.Title
        className={classNames(styles.title, className)}
        level={6}
        weight="semibold"
      >
        {product.name}
      </Typography.Title>
      <Variations />
      <div className={styles.price}>
        <Typography.Text className={styles.newPrice} weight="bold">
          347 ₽
        </Typography.Text>
        <Typography.Text
          strikethrough
          className={styles.oldPrice}
          weight="semibold"
        >
          550 ₽
        </Typography.Text>
      </div>
      <AddToCart />
    </div>
  )
}

export default Params
