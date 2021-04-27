import { Button, Link, Typography } from '@/components'
import { BxArrowBack } from '@/icons'
import { PATH } from '@/config'
import styles from './checkout.module.scss'
import Tariff from './Tariff'
import Payment from './Payment'
import Promocode from './Promocode'
import Totals from './Totals'
import Receiver from './Receiver'

const Checkout = () => {
  return (
    <>
      <Link className={styles.back} href={PATH.CART}>
        <Button icon={BxArrowBack} type="link">
          В корзину
        </Button>
      </Link>
      <Typography.Title className={styles.title} level={4}>
        Оформление заказа
      </Typography.Title>
      <Tariff />
      <Receiver />
      <Payment />
      <Promocode />
      <Totals />
      <Link href={PATH.RESULT}>
        <Button block className={styles.submit} size="large">
          Оплатить заказ
        </Button>
      </Link>
      <Typography.Text className={styles.comment}>
        Нажимая на кнопку, вы соглашаетесь с <a>условиями обработки</a>{' '}
        персональных данных и <a>условиями</a> продажи товаров
      </Typography.Text>
    </>
  )
}

export default Checkout
