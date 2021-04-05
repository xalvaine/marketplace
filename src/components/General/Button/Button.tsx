import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FunctionComponent,
  SVGProps,
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

const Button = (props: Props) => {
  const {
    children,
    type = `secondary`,
    size = `normal`,
    className,
    icon: Icon,
    ...rest
  } = props
  return (
    <button
      className={classNames(sizeToClass[size], typeToClass[type], className)}
      type="button"
      {...rest}
    >
      {Icon && <Icon className={styles.icon} />}
      {children && <span className={styles.content}>{children}</span>}
    </button>
  )
}

export default Button
