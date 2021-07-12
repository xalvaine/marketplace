import { UrlObject } from 'url'
import { FunctionComponent, ReactNode } from 'react'
import { Link, Typography } from '@/components'
import classNames from 'classnames'
import styles from './item.module.scss'

export interface ExternalProps {
  children?: ReactNode
  className?: string
  href?: UrlObject
}

interface Props extends ExternalProps {
  tileView?: boolean
}

const withLink = (Item: FunctionComponent<Props>) => {
  const component = ({ href, ...rest }: Props) =>
    href ? (
      <Link href={href}>
        <Item {...rest} />
      </Link>
    ) : (
      <Item {...rest} />
    )
  component.displayName = `Item`
  return component
}

const Item = (props: Props) => {
  const { children, className, tileView } = props
  return (
    <li className={classNames(styles.wrapper, tileView && styles.tile)}>
      <Typography.Text className={classNames(styles.text, className)}>
        {children}
      </Typography.Text>
    </li>
  )
}

export default withLink(Item)
