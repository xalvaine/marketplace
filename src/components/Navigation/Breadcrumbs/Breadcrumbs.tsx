import { Children, ComponentProps, ReactElement } from 'react'
import classNames from 'classnames'
import { BxRightArrow } from '@/icons'
import styles from './breadcrumbs.module.scss'
import Item from './Item'

interface Props {
  className?: string
  children:
    | ReactElement<ComponentProps<typeof Item>>
    | ReactElement<ComponentProps<typeof Item>>[]
}

const Breadcrumbs = (props: Props) => {
  const { children, className } = props
  const childrenCount = Children.count(children)

  return (
    <div className={classNames(styles.wrapper, className)}>
      {Children.map(children, ({ props }, index) => (
        <>
          <Item {...props} />
          {index < childrenCount - 1 && (
            <BxRightArrow className={styles.icon} />
          )}
        </>
      ))}
    </div>
  )
}

Breadcrumbs.Item = Item
export default Breadcrumbs
