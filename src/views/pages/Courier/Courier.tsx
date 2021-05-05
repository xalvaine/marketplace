import CheckoutHeader from '@/views/common/CheckoutHeader'
import { PATH } from '@/config'
import { Button, Input, Link } from '@/components'
import styles from './courier.module.scss'

const Courier = () => {
  return (
    <div className={styles.wrapper}>
      <CheckoutHeader backLink={PATH.TARIFFS} title="Адрес получения" />
      <div className={styles.content}>
        <div className={styles.form}>
          <Input disabled size="large" value="Казань" />
          <Input placeholder="*Индекс" size="large" />
          <Input placeholder="*Улица" size="large" />
          <div className={styles.pair}>
            <Input placeholder="*Дом" size="large" />
            <Input placeholder="*Квартира" size="large" />
          </div>
        </div>
        <Link href={PATH.CHECKOUT}>
          <Button block className={styles.choose} size="large">
            Сохранить и продолжить
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Courier
