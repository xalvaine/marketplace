import { Children, FunctionComponent, ReactElement } from 'react'
import classNames from 'classnames'
import Item, { ExternalProps } from './Item'
import styles from './item.module.scss'

interface Props {
  className?: string
  children?: ReactElement<ExternalProps> | ReactElement<ExternalProps>[]
  type?: 'text' | 'tile'
}

const List = (props: Props) => {
  const { children, className, type } = props

  return (
    <div className={className}>
      <ul
        className={classNames(
          styles.wrapper,
          type === `tile` && styles.tileView,
        )}
      >
        {children &&
          Children.map(children, ({ props, key }) => (
            <Item key={key} tileView={type === `tile`} {...props} />
          ))}
      </ul>
    </div>
  )
}

List.Item = Item as FunctionComponent<ExternalProps>
export default List
