import { Link, Typography } from '@/components'
import { PATH } from '@/config'
import { BxsRightArrow } from '@/icons'
import styles from './receiver.module.scss'

const Receiver = () => {
  return (
    <Link className={styles.wrapper} href={PATH.RECEIVERS}>
      <Typography.Title className={styles.title} level={5}>
        Получатель
      </Typography.Title>
      <Typography.Title className={styles.name} level={6} weight="semibold">
        Петров Иван
      </Typography.Title>
      <Typography.Text>+79872357525</Typography.Text>
      <BxsRightArrow className={styles.arrow} />
    </Link>
  )
}

export default Receiver
