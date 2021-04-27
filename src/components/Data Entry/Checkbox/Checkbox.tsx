import React from 'react'
import classNames from 'classnames'
import { BxsSquare } from '@/icons'
import { Typography } from '@/components'
import Check from './assets/check.svg'
import styles from './checkbox.module.scss'

interface Props
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'type'
  > {
  indeterminate?: boolean
}

const Checkbox = (props: Props) => {
  const { children, className, indeterminate, ...rest } = props

  return (
    <label className={classNames(styles.wrapper, className)}>
      <input {...rest} className={styles.input} type="checkbox" />
      <span
        className={classNames(
          styles.checkbox,
          indeterminate && styles.indeterminate,
          children && styles.withChildren,
        )}
      >
        <Check className={styles.check} />
        <BxsSquare className={styles.square} />
      </span>
      <Typography.Text>{children}</Typography.Text>
    </label>
  )
}

export default Checkbox
