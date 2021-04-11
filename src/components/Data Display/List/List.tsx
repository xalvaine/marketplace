import { ComponentProps, ReactElement } from 'react'
import classNames from 'classnames'
import Item from './Item'
import styles from './item.module.scss'

interface Props {
  children?:
    | ReactElement<ComponentProps<typeof Item>>
    | ReactElement<ComponentProps<typeof Item>>[]
  className?: string
}

const List = (props: Props) => {
  const { children, className } = props
  return <ul className={classNames(styles.wrapper, className)}>{children}</ul>
}

List.Item = Item
export default List
