import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Tag = (props: Props) => {
  const { children } = props
  return <>{children}</>
}

export default Tag
