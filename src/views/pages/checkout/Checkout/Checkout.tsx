import { Button, Link, Typography } from '@/components'
import { BxArrowBack } from '@/icons'
import { PATH } from '@/config'
import { usePostOrders } from '@/hooks'
import { useSelector } from 'react-redux'
import { RootState } from '@/pages/_app'
import { useRouter } from 'next/router'
import moment from 'moment'
import styles from './checkout.module.scss'
import Tariff from './TariffBlock'
import Payment from './Payment'
import Promocode from './Promocode'
import Totals from './Totals'
import Receiver from './ReceiverBlock'

const Checkout = () => {
  const { mutateAsync: postOrders } = usePostOrders()
  const order = useSelector((state: RootState) => state.checkout.order)
  const router = useRouter()

  const handleSubmit = async () => {
    try {
      await postOrders({
        ...order,
        desired_time_period_start: `12:00`,
        desired_time_period_end: `23:00`,
        payment_method: order.payment_method,
        delivery_code: `self_pickup`,
        desired_date: moment().subtract(10, `days`).format(`YYYY-MM-DD`),
      })
      await router.push({ pathname: PATH.RESULT, query: { result: `success` } })
    } catch {
      await router.push({ pathname: PATH.RESULT, query: { result: `failure` } })
    }
  }

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
          <Button
            block
            className={styles.submit}
            disabled={
              !(order.payment_method && order.receiver && order.user_address)
            }
            size="large"
            onClick={handleSubmit}
          >
            Оплатить заказ
          </Button>
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
