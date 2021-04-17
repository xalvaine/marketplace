import { MouseEventHandler, PropsWithChildren } from 'react'
import { LinkProps, default as NextLink } from 'next/link'

interface Props extends PropsWithChildren<LinkProps> {
  className?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

const Link = (props: Props) => {
  const { children, className, onClick, ...rest } = props
  return (
    <NextLink {...rest}>
      <a className={className} onClick={onClick}>
        {children}
      </a>
    </NextLink>
  )
}

export default Link
