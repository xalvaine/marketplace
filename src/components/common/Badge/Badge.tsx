import { ReactNode } from 'react'
import styles from './badge.module.scss'

interface Props {
  dot?: boolean
  count: number
  color?: string
  children: ReactNode
}

const Badge = (props: Props) => {
  const { dot, count, color, children } = props

  return (
    <div className={styles.wrapper}>
      {children}
      {count && dot ? (
        <span className={styles.dot} style={{ background: color }} />
      ) : null}
    </div>
  )
}

export default Badge
