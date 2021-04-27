import React, { ReactNode } from 'react'
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
}

const Radio = (props: Props) => {
  const { className, children, label, labelClassName, ...rest } = props

  return (
    <label className={classNames(styles.wrapper, className)}>
      <input className={classNames(styles.input)} type="radio" {...rest} />
      <span className={styles.radio} />
      <Typography.Text className={labelClassName}>{label}</Typography.Text>
      <Typography.Text disabled className={styles.description}>
        {children}
      </Typography.Text>
    </label>
  )
}

Radio.Group = Group
export default Radio
