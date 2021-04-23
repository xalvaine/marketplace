import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FunctionComponent,
  SVGProps,
  forwardRef,
} from 'react'
import classNames from 'classnames'

import styles from './button.module.scss'

type Props = Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'type'
> & {
  type?: keyof typeof typeToClass
  size?: keyof typeof sizeToClass
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>
  block?: boolean
}

const typeToClass = {
  primary: styles.primary,
  secondary: styles.secondary,
  link: styles.link,
  text: styles.text,
}

const sizeToClass = {
  normal: styles.buttonNormal,
  large: styles.buttonLarge,
}

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    children,
    type = `primary`,
    size = `normal`,
    className,
    icon: Icon,
    block,
    ...rest
  } = props
  return (
    <button
      ref={ref}
      className={classNames(
        sizeToClass[size],
        typeToClass[type],
        block && styles.block,
        className,
      )}
      type="button"
      {...rest}
    >
      {Icon && <Icon className={styles.icon} />}
      {children && <span className={styles.content}>{children}</span>}
    </button>
  )
})

Button.displayName = `Button`
export default Button
