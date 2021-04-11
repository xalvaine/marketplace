import { Children, ReactElement } from 'react'
import Item, { ExternalProps } from './Item'

interface Props {
  className?: string
  children: ReactElement<ExternalProps> | ReactElement<ExternalProps>[]
}

const Menu = (props: Props) => {
  const { children } = props

  const items = Children.map(children, ({ props, key }) => ({ ...props, key }))
  return (
    <>
      {items.map(({ key, children, ...props }) => (
        <Item {...props} key={key}>
          {children}
        </Item>
      ))}
    </>
  )
}

Menu.Item = Item
export default Menu
