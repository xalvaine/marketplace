import { Typography } from '@/components'
import styles from './additional.module.scss'

const Additional = () => {
  return (
    <section className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Typography.Text secondary weight="medium">
            Стать продавцом
          </Typography.Text>
        </li>
        <li className={styles.item}>
          <Typography.Text secondary weight="medium">
            Подарочные сертификаты
          </Typography.Text>
        </li>
        <li className={styles.item}>
          <Typography.Text secondary weight="medium">
            Реферальная программа
          </Typography.Text>
        </li>
        <li className={styles.item}>
          <Typography.Text secondary weight="medium">
            Помощь
          </Typography.Text>
        </li>
      </ul>
    </section>
  )
}

export default Additional
