import { Typography } from '@/components'
import { Cart } from '@/interfaces'
import styles from './totals.module.scss'

interface Props {
  cart?: Cart
}

const Totals = (props: Props) => {
  const { cart } = props

  return (
    <>
      <Typography.Text disabled className={styles.weight} weight="medium">
        Вес заказа: <span className={styles.right}>1, 20 кг.</span>
      </Typography.Text>
      <Typography.Text className={styles.text} weight="medium">
        Товаров ({cart?.items.length}){' '}
        <span className={styles.right}>{cart?.total_price} ₽</span>
      </Typography.Text>
      <Typography.Text className={styles.total} weight="bold">
        Итого <span className={styles.right}>{cart?.total_price} ₽</span>
      </Typography.Text>
    </>
  )
}

export default Totals
