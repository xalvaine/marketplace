import { Children, ComponentProps, HTMLAttributes, ReactElement } from 'react'
import classNames from 'classnames'
import Radio from '../'
import styles from './group.module.scss'

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string
  name: string
  orientation?: keyof typeof orientationToClassName
  children?:
    | ReactElement<ComponentProps<typeof Radio>>
    | ReactElement<ComponentProps<typeof Radio>>[]
}

const orientationToClassName = {
  horizontal: styles.horizontal,
  vertical: styles.vertical,
}

const Group = (props: Props) => {
  const { children, orientation = `vertical`, name, className } = props

  if (!children) return null
  return (
    <div className={classNames(orientationToClassName[orientation], className)}>
      {Children.map(children, ({ props, key }) => (
        <Radio key={key} {...props} name={name} />
      ))}
    </div>
  )
}

export default Group
