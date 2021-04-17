import { Key, ReactNode } from 'react'
import { Typography } from '@/components'
import { BxsRightArrow } from '@/icons'
import classNames from 'classnames'
import styles from './item.module.scss'

export interface ExternalProps {
  children: ReactNode
  key: Key
  disabled?: boolean
}

interface Props extends ExternalProps {
  size?: keyof typeof sizeToClass
  selected: boolean
  onClick: () => void
}

const sizeToClass = {
  normal: styles.normalWrapper,
  large: styles.largeWrapper,
}

const Item = (props: Props) => {
  const { children, selected, size = `normal`, onClick, disabled } = props

  return (
    <div
      className={classNames(
        sizeToClass[size],
        selected && styles.selected,
        disabled && styles.disabled,
      )}
      onClick={disabled ? undefined : onClick}
    >
      <Typography.Text className={styles.text}>{children}</Typography.Text>
      <BxsRightArrow className={styles.icon} />
    </div>
  )
}

export default Item
