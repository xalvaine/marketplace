import { ReactNode } from 'react'
import styles from './badge.module.scss'
import Typography from '../Typography'
import classNames from 'classnames'

const colorToStyle = {
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
  color?: keyof typeof colorToStyle
  children: ReactNode
  disabled?: boolean
  size?: 'normal' | 'small'
}

const Badge = (props: Props) => {
  const {
    children,
    dot,
    count,
    color = `neutral`,
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
              colorToStyle[color],
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
