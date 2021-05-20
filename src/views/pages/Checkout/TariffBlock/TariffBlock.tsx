import { Modal, Typography } from '@/components'
import { BxsRightArrow } from '@/icons'
import { useState } from 'react'
import { useUserAddresses } from '@/hooks'
import styles from './tariffBlock.module.scss'
import Addresses from './Addresses'

const TariffBlock = () => {
  const { data: addresses } = useUserAddresses()
  const [visible, setVisible] = useState(false)

  // const tariff = addresses?.find((address) => address.is_primary)

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
          Постамат X5 1270
        </Typography.Title>
        <Typography.Text>
          Казань, ул. Короленко 35а
          <span className={styles.schedule}>Ежедневно 08:00 – 22:00</span>
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
