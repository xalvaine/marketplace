import { ChangeEvent } from 'react'
import { Radio, Typography } from '@/components'
import { useDispatch, useSelector } from 'react-redux'
import { checkout } from '@/reducers'
import { RootState } from '@/pages/_app'
import styles from './payment.module.scss'

const radios: { label: string; value: 'COD_CARD' | 'COD_CASH' }[] = [
  { label: `Картой онлайн`, value: `COD_CARD` },
  { label: `Оплата при получении`, value: `COD_CASH` },
]

const Payment = () => {
  const dispatch = useDispatch()
  const order = useSelector((state: RootState) => state.checkout.order)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(checkout.patchOrder({ payment_method: event.target.value }))
  }

  return (
    <div className={styles.wrapper}>
      <Typography.Title className={styles.title} level={5}>
        Способ оплаты
      </Typography.Title>
      <Radio.Group className={styles.radioGroup} name="radio">
        {radios.map((radio) => (
          <Radio
            key={radio.value}
            checked={order.payment_method === radio.value}
            disabled={
              order.address?.type === `pickpoint` &&
              !order.address.payment_methods.includes(radio.value)
            }
            label={radio.label}
            labelClassName={styles.radioLabel}
            value={radio.value}
            onChange={handleChange}
          />
        ))}
      </Radio.Group>
    </div>
  )
}

export default Payment
