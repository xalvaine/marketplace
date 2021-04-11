import { ReactNode } from 'react'
import { Typography } from '@/components'
import styles from './item.module.scss'

export interface ExternalProps {
  children: ReactNode
}

interface Props extends ExternalProps {
  size?: string
}

const Item = (props: Props) => {
  const { children } = props

  return (
    <div className={styles.wrapper}>
      <Typography.Text>{children}</Typography.Text>
    </div>
  )
}

export default Item
