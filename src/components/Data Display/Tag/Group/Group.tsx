import { Children, ComponentProps, ReactElement } from 'react'
import classNames from 'classnames'
import { Tag } from '@/components'
import styles from './group.module.scss'

interface Props {
  children:
    | ReactElement<ComponentProps<typeof Tag>>
    | ReactElement<ComponentProps<typeof Tag>>[]
}

const Group = (props: Props) => {
  const { children } = props

  return (
    <div className={styles.overflow}>
      <div className={styles.wrapper}>
        {Children.map(children, ({ props: { className, ...rest }, key }) => (
          <Tag
            key={key}
            className={classNames(className, styles.tag)}
            {...rest}
          />
        ))}
      </div>
    </div>
  )
}

export default Group
