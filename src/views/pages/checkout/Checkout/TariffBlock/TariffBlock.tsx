import { Modal, Typography } from '@/components'
import { BxsRightArrow } from '@/icons'
import { useEffect, useState } from 'react'
import { useUserAddresses } from '@/hooks'
import { checkout } from '@/reducers'
import { useDispatch } from 'react-redux'
import styles from './tariffBlock.module.scss'
import Addresses from './Addresses'

const TariffBlock = () => {
  const dispatch = useDispatch()
  const { data: addresses } = useUserAddresses()
  const [visible, setVisible] = useState(false)

  const tariff = addresses?.find((address) => address.is_primary)

  useEffect(
    () =>
      void (tariff && dispatch(checkout.patchOrder({ user_address: tariff }))),
    [dispatch, tariff],
  )

  return (
    <>
      <div className={styles.wrapper} onClick={() => setVisible(true)}>
        <Typography.Title className={styles.title} level={5}>
          Способ доставки
        </Typography.Title>
        <Typography.Title
          className={styles.pointName}
          level={6}
          weight="semibold"
        >
          {tariff?.name}
        </Typography.Title>
        <Typography.Text>
          {[
            tariff?.address?.city_with_type,
            tariff?.additional_addr?.street,
            tariff?.additional_addr?.entrance,
          ]
            .filter((word) => !!word)
            .join(`, `)}
          <span className={styles.schedule}>{tariff?.work_time}</span>
        </Typography.Text>
        <BxsRightArrow className={styles.arrow} />
      </div>
      <Modal
        title="Способ доставки"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <Addresses addresses={addresses} onClose={() => setVisible(false)} />
      </Modal>
    </>
  )
}

export default TariffBlock
