import { Radio, Typography } from '@/components'
import styles from './payment.module.scss'

const Payment = () => {
  return (
    <div className={styles.wrapper}>
      <Typography.Title className={styles.title} level={5}>
        Способ оплаты
      </Typography.Title>
      <Radio.Group className={styles.radioGroup} name="radio">
        <Radio label="Картой онлайн" labelClassName={styles.radioLabel} />
        <Radio
          disabled
          label="Оплата при получении"
          labelClassName={styles.radioLabel}
        >
          Недоступно для выбранного ПВЗ
        </Radio>
      </Radio.Group>
    </div>
  )
}

export default Payment
