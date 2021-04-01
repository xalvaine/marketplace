import { ReactNode } from 'react'
import styles from './tab.module.scss'
import { Typography } from '@/components'

interface Props {
  children?: ReactNode
}

const Tab = (props: Props) => {
  const { children } = props
  return (
    <li className={styles.wrapper}>
      <Typography.Text className={styles.text} block>
        {children}
      </Typography.Text>
    </li>
  )
}

export default Tab
