import { ReactNode } from 'react'
import { Typography } from '@/components'
import styles from './option.module.scss'

export interface ExternalProps {
  key: string | number
  value: string | number
  children: ReactNode
}

interface Props extends ExternalProps {
  onClick: (value: string | number) => void
}

const Option = (props: Props) => {
  const { children, onClick, value } = props

  return (
    <div className={styles.wrapper} onClick={() => onClick(value)}>
      <Typography.Text>{children}</Typography.Text>
    </div>
  )
}

export default Option
