import { Modal, Typography } from '@/components'
import { BxsRightArrow } from '@/icons'
import { useState } from 'react'
import { useReceivers } from '@/hooks'
import styles from './receiverBlock.module.scss'
import Receivers from './Receivers'

const ReceiverBlock = () => {
  const { data: receivers } = useReceivers()
  const [visible, setVisible] = useState(false)

  const receiver = receivers?.find((receiver) => receiver.is_primary)

  return (
    <>
      <div className={styles.wrapper} onClick={() => setVisible(true)}>
        <Typography.Title className={styles.title} level={5}>
          Получатель
        </Typography.Title>
        <Typography.Title className={styles.name} level={6} weight="semibold">
          {receiver?.full_name || `Не выбран`}
        </Typography.Title>
        <Typography.Text>{receiver?.phone}</Typography.Text>
        <BxsRightArrow className={styles.arrow} />
      </div>
      <Modal
        title="Получатели"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <Receivers receivers={receivers} onClose={() => setVisible(false)} />
      </Modal>
    </>
  )
}

export default ReceiverBlock
