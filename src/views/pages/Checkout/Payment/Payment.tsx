import { Radio, Typography } from '@/components'
import styles from './payment.module.scss'

const Payment = () => {
  return (
    <>
      <Typography.Title className={styles.title} level={5}>
        Способ оплаты
      </Typography.Title>
      <Radio.Group className={styles.radioGroup} name="radio">
        <Radio label="Картой онлайн" labelClassName={styles.radioLabel} />
        <Radio label="Оплата при получении" labelClassName={styles.radioLabel}>
          Недоступно для выбранного ПВЗ
        </Radio>
      </Radio.Group>
    </>
  )
}

export default Payment
