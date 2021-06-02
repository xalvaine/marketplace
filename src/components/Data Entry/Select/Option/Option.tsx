import { ReactNode } from 'react'
import { Typography } from '@/components'
import classNames from 'classnames'
import styles from './option.module.scss'

export interface ExternalProps {
  key: string | number
  value: string | number
  children: ReactNode
}

interface Props extends ExternalProps {
  onClick: (value: string | number) => void
  active: boolean
}

const Option = (props: Props) => {
  const { children, onClick, value, active } = props

  return (
    <div
      className={classNames(styles.wrapper, active && styles.active)}
      onClick={() => onClick(value)}
    >
      <Typography.Text className={styles.text}>{children}</Typography.Text>
    </div>
  )
}

export default Option
