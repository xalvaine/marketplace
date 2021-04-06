import { ReactNode } from 'react'
import { Typography } from '@/components'
import styles from './tab.module.scss'

interface Props {
  children?: ReactNode
}

const Tab = (props: Props) => {
  const { children } = props
  return (
    <li className={styles.wrapper}>
      <Typography.Text block className={styles.text}>
        {children}
      </Typography.Text>
    </li>
  )
}

export default Tab
