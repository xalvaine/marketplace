import { Link, Typography } from '@/components'
import { PATH } from '@/config'
import { BxsRightArrow } from '@/icons'
import styles from './tariff.module.scss'

const Tariff = () => {
  return (
    <Link className={styles.wrapper} href={PATH.ADDRESSES}>
      <Typography.Title className={styles.title} level={5}>
        Способ получения
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
    </Link>
  )
}

export default Tariff
