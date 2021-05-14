import { PATH } from '@/config'
import { Button, Link, Modal, Radio, Typography } from '@/components'
import { BxEditAlt, BxPlus } from '@/icons'
import { useReceivers } from '@/hooks'
import { useState } from 'react'
import Receiver from '@/views/pages/Checkout/ReceiverBlock/Receiver'
import styles from './receivers.module.scss'

const Receivers = () => {
  const { data: receivers } = useReceivers()
  const [visible, setVisible] = useState(false)

  return (
    <>
      <div className={styles.content}>
        <Radio.Group className={styles.group} name="address">
          {receivers?.map((receiver, index) => (
            <Radio
              key={index}
              className={styles.radio}
              defaultChecked={receiver.is_primary}
              icon={BxEditAlt}
              label={receiver.full_name}
            >
              <Typography.Text inline>{receiver.phone}</Typography.Text>
            </Radio>
          ))}
        </Radio.Group>
        <Button
          block
          className={styles.add}
          icon={BxPlus}
          type="link"
          onClick={() => setVisible(true)}
        >
          Добавить получателя
        </Button>
        <Link href={PATH.CHECKOUT}>
          <Button block className={styles.choose} size="large">
            Выбрать
          </Button>
        </Link>
      </div>
      <Modal
        title="Получатель"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <Receiver onClose={() => setVisible(false)} />
      </Modal>
    </>
  )
}

export default Receivers
