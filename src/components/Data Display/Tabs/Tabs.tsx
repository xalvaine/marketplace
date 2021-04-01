import { ComponentProps, ReactElement } from 'react'
import classNames from 'classnames'
import styles from './tabs.module.scss'
import Tab from './Tab'

interface Props {
  children?:
    | ReactElement<ComponentProps<typeof Tab>>
    | ReactElement<ComponentProps<typeof Tab>>[]
  className?: string
}

const Tabs = (props: Props) => {
  const { children, className } = props
  return <ul className={classNames(styles.wrapper, className)}>{children}</ul>
}

Tabs.Tab = Tab
export default Tabs
