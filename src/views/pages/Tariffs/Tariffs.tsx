import { Typography } from '@/components'
import { PATH } from '@/config'
import { useTariffs } from '@/hooks/useTariff'
import { useState } from 'react'
import { Address } from '@/interfaces'
import Search from './Search'
import Variant from './Variant'
import styles from './tariffs.module.scss'

const Tariffs = () => {
  const [address, setAddress] = useState<Address>()
  const { data: tariffs } = useTariffs(address)

  return (
    <div className={styles.wrapper}>
      <Typography.Title className={styles.title} level={5}>
        Куда доставить заказ?
      </Typography.Title>
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
