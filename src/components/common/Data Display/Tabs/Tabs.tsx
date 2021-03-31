import { ComponentProps, ReactElement } from 'react'
import Tab from './Tab'

interface Props {
  children?: ReactElement<ComponentProps<typeof Tab>>
}

const Tabs = (props: Props) => {
  const { children } = props
  return <>{children}</>
}

Tabs.Tab = Tab
export default Tabs
