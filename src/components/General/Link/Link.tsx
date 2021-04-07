import { PropsWithChildren } from 'react'
import { LinkProps, default as NextLink } from 'next/link'

interface Props extends PropsWithChildren<LinkProps> {
  className?: string
}

const Link = (props: Props) => {
  const { children, className, ...rest } = props
  return (
    <NextLink {...rest}>
      <a className={className}>{children}</a>
    </NextLink>
  )
}

export default Link
