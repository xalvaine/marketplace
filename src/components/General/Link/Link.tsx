import { PropsWithChildren } from 'react'
import { LinkProps, default as NextLink } from 'next/link'

const Link = (props: PropsWithChildren<LinkProps>) => {
  const { children, ...rest } = props
  return (
    <NextLink {...rest}>
      <a>{children}</a>
    </NextLink>
  )
}

export default Link
