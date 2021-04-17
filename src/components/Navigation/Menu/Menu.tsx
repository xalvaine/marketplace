import { Children, FunctionComponent, ReactElement } from 'react'
import classNames from 'classnames'
import styles from './menu.module.scss'
import Item, { ExternalProps } from './Item'

interface Props {
  className?: string
  children?: ReactElement<ExternalProps> | ReactElement<ExternalProps>[]
  value?: string
  onSelect?: (value: string) => void
}

const Menu = (props: Props) => {
  const { children, value, className, onSelect } = props

  if (!children) return null
  const items = Children.map(children, ({ props, key }) => ({ ...props, key }))
  return (
    <nav className={classNames(styles.wrapper, className)}>
      {items.map(({ key, children, ...props }) => (
        <Item
          {...props}
          key={key as string}
          selected={value === key}
          onClick={() => onSelect && onSelect(key as string)}
        >
          {children}
        </Item>
      ))}
    </nav>
  )
}

Menu.Item = Item as FunctionComponent<ExternalProps>
export default Menu
