import { Cart } from '@/interfaces'
import { Progress, Typography } from '@/components'
import { BxsGift, BxsTruck } from '@/icons'
import styles from './delivery.module.scss'

interface Props {
  cart?: Cart
}

const Delivery = (props: Props) => {
  const { cart } = props
  return (
    <div className={styles.wrapper}>
      <div className={styles.icons}>
        <div className={styles.iconWrapper}>
          <BxsTruck className={styles.leftIcon} />
          <Typography.Text className={styles.point} weight="medium">
            0K ₽
          </Typography.Text>
        </div>
        <div className={styles.iconWrapper}>
          <Typography.Text className={styles.point} weight="medium">
            3K ₽
          </Typography.Text>
          <BxsGift className={styles.rightIcon} />
        </div>
      </div>
      <Progress maxValue={3000} value={cart?.total_price} />
      {cart && cart?.total_price < 3000 ? (
        <Typography.Text secondary className={styles.text}>
          До бесплатной доставки:{' '}
          <span className={styles.price}>{3000 - cart.total_price} ₽</span>
        </Typography.Text>
      ) : (
        <Typography.Text
          secondary
          className={styles.activeText}
          weight="medium"
        >
          Доставка бесплатна
        </Typography.Text>
      )}
    </div>
  )
}

export default Delivery
