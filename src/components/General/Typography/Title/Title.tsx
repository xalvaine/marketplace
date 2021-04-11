import { DetailedHTMLProps, HTMLAttributes, createElement } from 'react'
import classNames from 'classnames'
import styles from './title.module.scss'

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  level: keyof typeof levelToClass
}

const levelToClass = {
  1: styles.h1,
  2: styles.h2,
  3: styles.h3,
  4: styles.h4,
  5: styles.h5,
  6: styles.h6,
}

const Title = (props: Props) => {
  const { level, children, className, ...rest } = props

  return createElement(
    `h${level}`,
    {
      className: classNames(className, styles.title, levelToClass[level]),
      ...rest,
    },
    children,
  )
}

export default Title
