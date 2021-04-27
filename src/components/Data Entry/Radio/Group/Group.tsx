import { Children, ComponentProps, ReactElement } from 'react'
import classNames from 'classnames'
import Radio from '../'
import styles from './group.module.scss'

interface Props {
  className?: string
  name: string
  orientation?: keyof typeof orientationToClassName
  children:
    | ReactElement<ComponentProps<typeof Radio>>
    | ReactElement<ComponentProps<typeof Radio>>[]
}

const orientationToClassName = {
  horizontal: styles.horizontal,
  vertical: styles.vertical,
}

const Group = (props: Props) => {
  const { children, orientation = `vertical`, name, className } = props

  return (
    <div className={classNames(orientationToClassName[orientation], className)}>
      {Children.map(children, ({ props, key }) => (
        <Radio key={key} {...props} name={name} />
      ))}
    </div>
  )
}

export default Group
