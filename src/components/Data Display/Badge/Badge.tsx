import { ReactNode } from 'react'
import styles from './badge.module.scss'
import { Typography } from '@/components'
import classNames from 'classnames'

const themeToStyle = {
  neutral: styles.neutral,
  selected: styles.selected,
  default: styles.default,
  green: styles.green,
  red: styles.red,
}

const sizeToStyle = {
  normal: styles.badge,
  small: styles.smallBadge,
}

interface Props {
  dot?: boolean
  count?: number
  color?: string
  theme?: keyof typeof themeToStyle
  children: ReactNode
  disabled?: boolean
  size?: 'normal' | 'small'
}

const Badge = (props: Props) => {
  const {
    children,
    dot,
    count,
    color,
    theme = `neutral`,
    size = `normal`,
    disabled,
  } = props

  return (
    <div className={styles.wrapper}>
      {children}
      {!!count &&
        (dot ? (
          <span className={styles.dot} style={{ background: color }} />
        ) : (
          <span
            className={classNames(
              sizeToStyle[size],
              themeToStyle[theme],
              disabled && styles.disabled,
            )}
          >
            <Typography.Text secondary>{count}</Typography.Text>
          </span>
        ))}
    </div>
  )
}

export default Badge
