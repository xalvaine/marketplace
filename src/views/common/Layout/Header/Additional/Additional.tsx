import { Typography } from '@/components'
import { ForwardedRef, forwardRef } from 'react'
import styles from './additional.module.scss'

const Additional = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <section ref={ref} className={styles.wrapper}>
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
})
Additional.displayName = `Additional`

export default Additional
