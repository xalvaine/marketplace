import { Button, Link, Typography } from '@/components'
import { BxArrowBack } from '@/icons'
import { PATH } from '@/config'
import styles from './checkout.module.scss'
import Tariff from './Tariff'
import Payment from './Payment'

const Checkout = () => {
  return (
    <div>
      <Link className={styles.back} href={PATH.CART}>
        <Button icon={BxArrowBack} type="link">
          В корзину
        </Button>
      </Link>
      <Typography.Title className={styles.title} level={4}>
        Оформление заказа
      </Typography.Title>
      <Tariff />
      <Payment />
      <Button block size="large">
        Оплатить заказ
      </Button>
    </div>
  )
}

export default Checkout
