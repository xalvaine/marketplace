import { createElement, DetailedHTMLProps, HTMLAttributes } from 'react'
import classNames from 'classnames'
import styles from './title.module.scss'

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  level: 1 | 2 | 3 | 4 | 5
}

const Title = (props: Props) => {
  const { level, children, className, ...rest } = props

  return createElement(
    `h${level}`,
    { className: classNames(className, styles.title), ...rest },
    children,
  )
}

export default Title
