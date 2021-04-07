import { DetailedHTMLProps, HTMLAttributes, createElement } from 'react'
import classNames from 'classnames'
import styles from './text.module.scss'

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  inline?: boolean
  disabled?: boolean
  secondary?: boolean
}

const Text = (props: Props) => {
  const { inline, children, className, secondary, disabled, ...rest } = props

  return createElement(
    inline ? `span` : `p`,
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
