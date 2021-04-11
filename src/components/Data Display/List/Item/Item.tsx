import { ReactNode } from 'react'
import { Typography } from '@/components'
import styles from './item.module.scss'

interface Props {
  children?: ReactNode
}

const Item = (props: Props) => {
  const { children } = props
  return (
    <li className={styles.wrapper}>
      <Typography.Text className={styles.text}>{children}</Typography.Text>
    </li>
  )
}

export default Item
