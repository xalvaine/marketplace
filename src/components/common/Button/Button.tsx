import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import classNames from 'classnames'

import styles from './button.module.scss'

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  kind?: keyof typeof kindToClass
  size?: keyof typeof sizeToClass
}

const kindToClass = {
  primary: styles.primary,
  secondary: styles.secondary,
  link: styles.link,
  text: styles.text,
}

const sizeToClass = {
  normal: styles.buttonNormal,
  large: styles.buttonNormal,
}

const Button = (props: Props) => {
  const {
    children,
    kind = `primary`,
    size = `normal`,
    className,
    ...rest
  } = props
  return (
    <button
      className={classNames(sizeToClass[size], kindToClass[kind], className)}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
