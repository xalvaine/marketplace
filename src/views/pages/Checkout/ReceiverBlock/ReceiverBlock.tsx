import { Modal, Typography } from '@/components'
import { BxsRightArrow } from '@/icons'
import { useState } from 'react'
import styles from './receiverBlock.module.scss'
import Receivers from './Receivers'

const ReceiverBlock = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <div className={styles.wrapper} onClick={() => setVisible(true)}>
        <Typography.Title className={styles.title} level={5}>
          Получатель
        </Typography.Title>
        <Typography.Title className={styles.name} level={6} weight="semibold">
          Петров Иван
        </Typography.Title>
        <Typography.Text>+79872357525</Typography.Text>
        <BxsRightArrow className={styles.arrow} />
      </div>
      <Modal
        title="Получатели"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <Receivers onClose={() => setVisible(false)} />
      </Modal>
    </>
  )
}

export default ReceiverBlock
