import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Tab = (props: Props) => {
  const { children } = props
  return <>{children}</>
}

export default Tab
