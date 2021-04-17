import { ReactNode } from 'react'
import { Typography } from '@/components'
import classNames from 'classnames'
import styles from './tag.module.scss'
import Group from './Group'

interface Props {
  checked?: boolean
  color?: keyof typeof colorToStyle
  size?: keyof typeof sizeToStyle
  children?: ReactNode
  className?: string
  disabled?: boolean
}

const colorToStyle = { gray: styles.gray, green: styles.green }
const sizeToStyle = { normal: styles.normal, large: styles.large }

const Tag = (props: Props) => {
  const {
    children,
    color = `gray`,
    size = `normal`,
    className,
    checked,
    disabled,
  } = props
  return (
    <div
      className={classNames(
        sizeToStyle[size],
        colorToStyle[color],
        checked && styles.checked,
        disabled && styles.disabled,
        className,
      )}
    >
      <Typography.Text className={styles.text}>{children}</Typography.Text>
    </div>
  )
}

Tag.Group = Group
export default Tag
