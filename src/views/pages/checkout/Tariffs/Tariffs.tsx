import { Steps, Typography } from '@/components'
import { PATH } from '@/config'
import { useTariffs } from '@/hooks/checkout/useTariff'
import { useState } from 'react'
import { Address } from '@/interfaces'
import CheckoutHeader from '@/views/common/CheckoutHeader'
import { useMediaQuery } from '@/utils'
import { RootState } from '@/pages/_app'
import { useSelector } from 'react-redux'
import Search from './Search'
import Variant from './Variant'
import styles from './tariffs.module.scss'

const Tariffs = () => {
  const [address, setAddress] = useState<Address>()
  const { data: tariffs } = useTariffs(address)
  const { matches } = useMediaQuery(`(min-width: 1024px)`)
  const registered = useSelector(
    (state: RootState) => state.authorization.registered,
  )

  return (
    <div className={styles.wrapper}>
      {!registered && (
        <Steps className={styles.steps} current={1}>
          <Steps.Step title="Авторизация" />
          <Steps.Step title="Доставка" />
          <Steps.Step title="Оформление заказа" />
        </Steps>
      )}
      {matches ? (
        <CheckoutHeader backLink={PATH.CHECKOUT} title="Способ доставки" />
      ) : (
        <Typography.Title className={styles.title} level={5}>
          Куда доставить заказ?
        </Typography.Title>
      )}
      <Search setAddress={setAddress} />
      {tariffs && (
        <>
          <Typography.Text disabled className={styles.text}>
            Выберете подходящий способ доставки
          </Typography.Text>
          <Variant href={PATH.COURIER} tariffs={tariffs} type="COURIER" />
          <Variant href={PATH.MAP} tariffs={tariffs} type="PVZ" />
          <Variant
            href={PATH.RUSSIAN_POST}
            tariffs={tariffs}
            type="RUSSIAN_POST"
          />
        </>
      )}
    </div>
  )
}

export default Tariffs
