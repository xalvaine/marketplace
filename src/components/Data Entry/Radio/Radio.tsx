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
  onIconClick?: () => void
}

const Radio = (props: Props) => {
  const {
    className,
    children,
    label,
    labelClassName,
    icon: Icon,
    onIconClick,
    ...rest
  } = props

  const handleIconClick = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
  ) => {
    event.preventDefault()
    if (onIconClick) onIconClick()
  }

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
      {Icon && <Icon className={styles.icon} onClick={handleIconClick} />}
    </label>
  )
}

Radio.Group = Group
export default Radio
