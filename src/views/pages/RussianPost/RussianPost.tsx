import CheckoutHeader from '@/views/common/CheckoutHeader'
import { Button, Input, Typography, Link } from '@/components'
import { BxsDownArrow } from '@/icons'
import { PATH } from '@/config'
import { useSelector } from 'react-redux'
import { RootState } from '@/pages/_app'
import styles from './russian-post.module.scss'

const RussianPost = () => {
  const city = useSelector((state: RootState) => state.checkout.city)

  return (
    <div className={styles.wrapper}>
      <CheckoutHeader backLink={PATH.CHECKOUT} title="Адрес получения" />
      <div className={styles.content}>
        <div className={styles.form}>
          <Input disabled size="large" value={city?.unrestricted_value} />
          <Input placeholder="*Улица" size="large" />
          <div className={styles.pair}>
            <Input placeholder="*Дом" size="large" />
            <Input placeholder="*Квартира" size="large" />
          </div>
        </div>
        <div className={styles.sectionTitleWrapper}>
          <Typography.Title level={6}>Дополнительно</Typography.Title>
          <BxsDownArrow className={styles.icon} />
        </div>
        <div className={styles.form}>
          <Input placeholder="Подъезд" size="large" />
          <Input placeholder="Этаж" size="large" />
          <Input placeholder="Домофон" size="large" />
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

export default RussianPost
