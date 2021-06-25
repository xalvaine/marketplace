import { ReactNode } from 'react'
import { Typography } from '@/components'
import classNames from 'classnames'
import styles from './item.module.scss'

interface Props {
  children?: ReactNode
  className?: string
}

const Item = (props: Props) => {
  const { children, className } = props
  return (
    <li className={styles.wrapper}>
      <Typography.Text className={classNames(styles.text, className)}>
        {children}
      </Typography.Text>
    </li>
  )
}

export default Item
