import React, { FunctionComponent, ReactNode, SVGProps } from 'react'
import classNames from 'classnames'
import { Typography } from '@/components'
import Group from './Group'
import styles from './radio.module.scss'

interface Props
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'type'
  > {
  label?: ReactNode
  labelClassName?: string
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>
}

const Radio = (props: Props) => {
  const {
    className,
    children,
    label,
    labelClassName,
    icon: Icon,
    ...rest
  } = props

  return (
    <label className={classNames(styles.wrapper, styles.withIcon, className)}>
      <input className={classNames(styles.input)} type="radio" {...rest} />
      <span className={styles.radio} />
      <Typography.Text
        className={classNames(styles.label, labelClassName)}
        weight="semibold"
      >
        {label}
      </Typography.Text>
      <Typography.Text disabled className={styles.description}>
        {children}
      </Typography.Text>
      {Icon && <Icon className={styles.icon} />}
    </label>
  )
}

Radio.Group = Group
export default Radio
