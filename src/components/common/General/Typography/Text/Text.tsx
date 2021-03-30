import { createElement, DetailedHTMLProps, HTMLAttributes } from 'react'
import classNames from 'classnames'
import styles from './text.module.scss'

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  block?: boolean
  disabled?: boolean
  secondary?: boolean
}

const Text = (props: Props) => {
  const { block, children, className, secondary, disabled, ...rest } = props

  return createElement(
    block ? `p` : `span`,
    {
      className: classNames(
        className,
        styles.text,
        secondary && styles.textSecondary,
        disabled && styles.textDisabled,
      ),
      ...rest,
    },
    children,
  )
}

export default Text
