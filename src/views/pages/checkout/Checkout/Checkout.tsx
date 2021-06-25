import { Button, Link, Typography } from '@/components'
import { BxArrowBack } from '@/icons'
import { PATH } from '@/config'
import styles from './checkout.module.scss'
import Tariff from './TariffBlock'
import Payment from './Payment'
import Promocode from './Promocode'
import Totals from './Totals'
import Receiver from './ReceiverBlock'

const Checkout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <Link className={styles.back} href={PATH.CART}>
          <Button icon={BxArrowBack} type="link">
            В корзину
          </Button>
        </Link>
        <Typography.Title className={styles.title} level={4}>
          Оформление заказа
        </Typography.Title>
      </div>
      <div className={styles.info}>
        <Tariff />
        <Receiver />
        <Payment />
      </div>
      <div className={styles.aside}>
        <div className={styles.promocode}>
          <Promocode />
        </div>
        <div className={styles.totals}>
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
        </div>
      </div>
    </div>
  )
}

export default Checkout
