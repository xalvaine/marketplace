import { Typography } from '@/components'
import { PATH } from '@/config'
import Search from './Search'
import Variant from './Variant'
import styles from './tariffs.module.scss'

const Tariffs = () => {
  // const handleCheckout = async () => {
  //   await cartAPI.post(`/orders`, {
  //     address: address && value !== undefined && address[value],
  //     pickup_point_id: '2201-001',
  //     desired_date: '2020-01-01',
  //     desired_time_period_start: '22:00',
  //     desired_time_period_end: '23:00',
  //     promocode: 'test_promo',
  //     comment: 'asap',
  //   })
  // }

  return (
    <div className={styles.wrapper}>
      <Typography.Title className={styles.title} level={5}>
        Куда доставить заказ?
      </Typography.Title>
      <Search />
      <Typography.Text disabled className={styles.text}>
        Выберете подходящий способ доставки
      </Typography.Text>
      <Variant href={PATH.COURIER} />
      <Variant href={PATH.MAP} />
      <Variant href={PATH.RUSSIAN_POST} />
    </div>
  )
}

export default Tariffs
