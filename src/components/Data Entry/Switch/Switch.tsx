import React from 'react'
import styles from './switch.module.scss'

interface Props
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'size'
  > {
  size: 'small' // TODO add normal
}

const Switch = (props: Props) => {
  const { checked, onChange } = props

  return (
    <label className={styles.label}>
      <input
        checked={checked}
        className={styles.input}
        type="checkbox"
        onChange={onChange}
      />
      <span className={styles.switch} />
    </label>
  )
}

export default Switch
