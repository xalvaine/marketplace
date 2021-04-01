import { ComponentProps, ReactElement } from 'react'
import styles from './tabs.module.scss'
import Tab from './Tab'

interface Props {
  children?: ReactElement<ComponentProps<typeof Tab>>
}

const Tabs = (props: Props) => {
  const { children } = props
  return <div className={styles.wrapper}>{children}</div>
}

Tabs.Tab = Tab
export default Tabs
